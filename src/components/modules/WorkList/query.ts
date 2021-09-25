import { gql } from "@apollo/client"

export const GET_WORK_LIST = gql`
  query getWorkList($state: StatusState!, $first: Int, $after: String) {
    viewer {
      works(
        state: $state
        orderBy: { field: SEASON, direction: DESC }
        first: $first
        after: $after
      ) {
        edges {
          node {
            title
            id
            annictId
            media
            image {
              recommendedImageUrl
            }
            seasonYear
            seasonName
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`
