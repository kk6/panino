import { useToast } from "@chakra-ui/toast"
import React, { useState } from "react"

import { StatusState, useUpdateStatusMutation } from "@/generated/graphql"

import { TEpisode } from "./types"

export const useOnChangeStatus = () => {
  const [updateStatus] = useUpdateStatusMutation()
  const toast = useToast()
  const onChangeStatus = (
    e: React.ChangeEvent<HTMLSelectElement>,
    workId: string
  ) => {
    const status = e.target.value as StatusState
    updateStatus({
      variables: { state: status, workId: workId },
      onCompleted() {
        this.refetchQueries
      },
    })
    toast({
      description: "記録しました。",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  }
  return {
    onChangeStatus,
  }
}

export const useOnClickEpisodeRow = () => {
  const [title, setTitle] = useState("")
  const [episodeId, setEpisodeId] = useState("")
  const [episodeNumberText, setEpisodeNumberText] = useState("")
  const onClickEpisodeRow = (episode: TEpisode, onOpen: () => void) => {
    setTitle(episode.title)
    setEpisodeId(episode.id)
    setEpisodeNumberText(episode.numberText)
    onOpen()
  }
  return {
    onClickEpisodeRow,
    title,
    episodeId,
    episodeNumberText,
  }
}
