import { gql } from "@apollo/client"

export const CREATE_RECORD = gql`
  mutation createRecord(
    $episodeId: ID!
    $ratingState: RatingState
    $comment: String
    $shareTwitter: Boolean
  ) {
    createRecord(
      input: {
        episodeId: $episodeId
        ratingState: $ratingState
        comment: $comment
        shareTwitter: $shareTwitter
      }
    ) {
      clientMutationId
    }
  }
`
