import { useToast } from "@chakra-ui/toast"
import { useRef } from "react"

import { RatingState, useCreateRecordMutation } from "@/generated/graphql"

import { RecordDialog } from "./RecordDialog"

type Props = {
  title: string
  episodeId: string
  episodeNumberText: string
  isOpen: boolean
  onClose: () => void
}
export const RecordDialogContainer: React.FC<Props> = ({
  title,
  episodeId,
  episodeNumberText,
  isOpen,
  onClose,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const ratingRef = useRef<HTMLSelectElement>(null)
  const [createRecord] = useCreateRecordMutation()
  const toast = useToast()

  const handleClick = () => {
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
      title: `${episodeNumberText} ${title}`,
      description: "記録しました。",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  }
  return (
    <RecordDialog
      title={title}
      episodeId={episodeId}
      episodeNumberText={episodeNumberText}
      textareaRef={textareaRef}
      ratingRef={ratingRef}
      shareTwitter={false}
      onSubmit={handleClick}
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}

const getRatingState = (
  rating: string | undefined
): RatingState | undefined => {
  if (!rating) {
    return
  }
  switch (rating) {
    case "GREAT":
      return RatingState.Great
    case "GOOD":
      return RatingState.Good
    case "AVERAGE":
      return RatingState.Average
    case "BAD":
      return RatingState.Bad
    default:
      return
  }
}
