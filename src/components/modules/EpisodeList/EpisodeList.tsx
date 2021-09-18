import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react"

import { GetEpisodeListQuery } from "@/generated/graphql"

interface Props {
  data: GetEpisodeListQuery
}
export const EpisodeList: React.FC<Props> = ({ data }) => {
  const work = data.searchWorks?.edges ? data.searchWorks?.edges[0] : null
  return (
    <>
      <Heading>{work?.node?.title}</Heading>
      <List>
        {work?.node?.episodes?.edges?.map((episode) =>
          episode ? (
            <ListItem key={episode.node?.id}>
              <Flex justify="space-around">
                <Text>{episode.node?.numberText}</Text>
                <Text>
                  {episode.node?.title
                    ? episode.node?.title
                    : "（タイトル未定）"}
                </Text>
                <Text>
                  {episode.node?.viewerDidTrack ? "視聴済み" : "未視聴"}
                </Text>
              </Flex>
            </ListItem>
          ) : null
        )}
      </List>
    </>
  )
}
