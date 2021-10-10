import { useDisclosure } from "@chakra-ui/hooks"

import { Loading } from "@/components/elements/Loading"
import { useGetEpisodeListQuery } from "@/generated/graphql"

import { EpisodeList } from "./EpisodeList"
import { useOnChangeStatus, useOnClickEpisodeRow } from "./hooks"
import { mappingWorkWithEpisodes } from "./mappers"

type Props = {
  workId: number
}
export const EpisodeListContainer: React.FC<Props> = ({ workId }) => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { onClickEpisodeRow, title, episodeId, episodeNumberText } =
    useOnClickEpisodeRow()
  const { onChangeStatus } = useOnChangeStatus()

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

  return (
    <EpisodeList
      work={work}
      episodes={episodes}
      title={title}
      episodeId={episodeId}
      episodeNumberText={episodeNumberText}
      onClickEpisodeRow={onClickEpisodeRow}
      isOpenRecordDialog={isOpen}
      onOpenRecordDialog={onOpen}
      onCloseRecordDialog={onClose}
      onChangeStatus={onChangeStatus}
    />
  )
}
