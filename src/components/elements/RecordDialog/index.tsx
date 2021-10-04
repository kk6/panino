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
  const [createRecord, { data, loading, error }] = useCreateRecordMutation()

  const handleClick = () => {
    const comment = textareaRef.current?.value
    const rating = ratingRef.current?.value

    try {
      const response = createRecord({
        variables: {
          episodeId: episodeId,
          ratingState: RatingState.Great,
          comment: comment,
        },
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
    onClose()
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
