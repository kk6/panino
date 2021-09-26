import { gql } from "@apollo/client"

export const UPDATE_STATUS = gql`
  mutation updateStatus($state: StatusState!, $workId: ID!) {
    updateStatus(input: { state: $state, workId: $workId }) {
      clientMutationId
    }
  }
`
