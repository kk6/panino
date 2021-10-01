import { Loading } from "@/components/elements/Loading"
import { useGetEpisodeListQuery } from "@/generated/graphql"

import { EpisodeList } from "./EpisodeList"

type Props = {
  workId: number
}
export const EpisodeListContainer: React.FC<Props> = ({ workId }) => {
  const { data, loading, error } = useGetEpisodeListQuery({
    variables: { annictId: workId },
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
