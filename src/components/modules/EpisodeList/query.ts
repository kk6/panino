import { gql } from "@apollo/client"

export const GET_EPISODE_LIST = gql`
  query getEpisodeList($annictId: [Int!]) {
    searchWorks(annictIds: $annictId) {
      edges {
        node {
          id
          annictId
          title
          viewerStatusState
          image {
            recommendedImageUrl
          }
          media
          episodes(orderBy: { field: SORT_NUMBER, direction: ASC }) {
            edges {
              node {
                id
                number
                numberText
                title
                viewerDidTrack
              }
            }
          }
        }
      }
    }
  }
`
