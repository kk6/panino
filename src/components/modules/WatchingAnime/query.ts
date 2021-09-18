import { gql } from "@apollo/client"

export const WATCHING_ANIME = gql`
  query WatchingAnime {
    viewer {
      works(state: WATCHING, orderBy: { field: SEASON, direction: DESC }) {
        nodes {
          annictId
          title
          image {
            recommendedImageUrl
          }
          episodesCount
        }
      }
    }
  }
`
