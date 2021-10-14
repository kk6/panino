import { gql } from "@apollo/client"

export const GET_WORK_TABS_COUNTS = gql`
  query getWorkTabsCounts {
    viewer {
      watchingCount
      wannaWatchCount
      watchedCount
      onHoldCount
      stopWatchingCount
    }
  }
`
