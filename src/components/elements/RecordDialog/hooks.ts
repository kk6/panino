import { useToast } from "@chakra-ui/toast"
import { useRef } from "react"

import { useCreateRecordMutation } from "@/generated/graphql"

import { getRatingState } from "./utils"

export const useRecordDialog = (
  episodeId: string,
  episodeNumberText: string,
  episodeTitle: string,
  onClose: () => void
) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const ratingRef = useRef<HTMLSelectElement>(null)
  const [createRecord] = useCreateRecordMutation()
  const toast = useToast()

  const submitRecord = () => {
    const comment = textareaRef.current?.value
    const rating = ratingRef.current?.value

    createRecord({
      variables: {
        episodeId: episodeId,
        ratingState: getRatingState(rating),
        comment: comment,
      },
    })

    onClose()

    toast({
      title: `${episodeNumberText} ${episodeTitle}`,
      description: "記録しました。",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  }

  return {
    textareaRef,
    ratingRef,
    submitRecord,
  }
}
