import { useRecordDialog } from "./hooks"
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
  const { textareaRef, ratingRef, submitRecord } = useRecordDialog(
    episodeId,
    episodeNumberText,
    title,
    onClose
  )
  return (
    <RecordDialog
      title={title}
      episodeId={episodeId}
      episodeNumberText={episodeNumberText}
      textareaRef={textareaRef}
      ratingRef={ratingRef}
      shareTwitter={false}
      onSubmit={submitRecord}
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}
