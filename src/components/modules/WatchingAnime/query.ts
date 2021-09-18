import { gql } from "@apollo/client"

export const WATCHING_ANIME = gql`
  query WatchingAnime {
    viewer {
      works(state: WATCHING, orderBy: { field: SEASON, direction: DESC }) {
        nodes {
          id
          title
          image {
            recommendedImageUrl
          }
          episodesCount
          episodes {
            nodes {
              title
            }
          }
        }
      }
    }
  }
`
