import { useDisclosure } from "@chakra-ui/hooks"
import { useState } from "react"

import { Loading } from "@/components/elements/Loading"
import { useGetEpisodeListQuery } from "@/generated/graphql"

import { EpisodeList } from "./EpisodeList"
import { mappingWorkWithEpisodes } from "./mappers"
import { TEpisode } from "./types"

type Props = {
  workId: number
}
export const EpisodeListContainer: React.FC<Props> = ({ workId }) => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [title, setTitle] = useState("")
  const [episodeId, setEpisodeId] = useState("")
  const [episodeNumberText, setEpisodeNumberText] = useState("")
  const onClickEpisodeRow = (episode: TEpisode) => {
    setTitle(episode.title)
    setEpisodeId(episode.id)
    setEpisodeNumberText(episode.numberText)
    onOpen()
  }
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
      onClick={onClickEpisodeRow}
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}
