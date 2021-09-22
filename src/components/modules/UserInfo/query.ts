import { gql } from "@apollo/client"

export const GET_USER_INFO = gql`
  query getUserInfo {
    viewer {
      name
      username
      avatarUrl
      watchingCount
      wannaWatchCount
      watchedCount
      onHoldCount
      stopWatchingCount
      recordsCount
    }
  }
`
