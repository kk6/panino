import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
} from "@chakra-ui/react"
import { RefObject } from "react"

import { RatingState } from "@/generated/graphql"

type Props = {
  title: string
  episodeId: string
  episodeNumberText: string
  textareaRef: RefObject<HTMLTextAreaElement>
  ratingRef: RefObject<HTMLSelectElement>
  shareTwitter: boolean
  onSubmit: () => void
  isOpen: boolean
  onClose: () => void
}
export const RecordDialog: React.FC<Props> = ({
  title,
  episodeId,
  episodeNumberText,
  textareaRef,
  ratingRef,
  shareTwitter,
  onSubmit,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form>
            <ModalHeader>
              {episodeNumberText} {title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select placeholder="評価をつける" ref={ratingRef}>
                <option value={RatingState.Bad}>良くない</option>
                <option value={RatingState.Average}>普通</option>
                <option value={RatingState.Good}>良い</option>
                <option value={RatingState.Great}>とても良い</option>
              </Select>
              <Textarea
                mt={2}
                placeholder="見た感想を残しませんか？（自由入力）"
                ref={textareaRef}
              />
              <input type="hidden" name="id" value={episodeId} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={onSubmit}>
                記録する
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
