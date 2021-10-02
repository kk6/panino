import { Loading } from "@/components/elements/Loading"
import { useGetEpisodeListQuery } from "@/generated/graphql"

import { EpisodeList } from "./EpisodeList"
import { mappingWorkWithEpisodes } from "./mappers"

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

  const { work, episodes } = mappingWorkWithEpisodes(data)

  return <EpisodeList work={work} episodes={episodes} />
}
