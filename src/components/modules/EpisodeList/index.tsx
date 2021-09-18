import { useSession } from "next-auth/client"

import { Loading } from "@/components/elements/Loading"
import { useGetEpisodeListQuery } from "@/generated/graphql"

import { EpisodeList } from "./EpisodeList"

interface Props {
  workId: number
}
export const EpisodeListContainer: React.FC<Props> = ({ workId }) => {
  const [session, _loading] = useSession()
  const { data, loading, error } = useGetEpisodeListQuery({
    variables: { annictId: workId },
    context: { headers: { Authorization: `bearer ${session?.accessToken}` } },
  })
  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    console.error(error)
    return <div>ERROR</div>
  }

  return <EpisodeList data={data} />
}
