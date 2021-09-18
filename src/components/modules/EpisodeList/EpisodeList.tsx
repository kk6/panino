import {
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react"

import { GetEpisodeListQuery } from "@/generated/graphql"

interface Props {
  data: GetEpisodeListQuery
}
export const EpisodeList: React.FC<Props> = ({ data }) => {
  const work = data.searchWorks?.edges ? data.searchWorks?.edges[0] : null
  const fontSize = "sm"
  return (
    <Container>
      <Heading p={4} size="md">
        {work?.node?.title}
      </Heading>
      <List>
        {work?.node?.episodes?.edges?.map((episode) =>
          episode ? (
            <ListItem key={episode.node?.id}>
              <Flex justify="space-between">
                <Text fontSize={fontSize} width="3rem">
                  {episode.node?.numberText}
                </Text>
                <Text fontSize={fontSize} flex={1}>
                  {episode.node?.title
                    ? episode.node?.title
                    : "（タイトル未定）"}
                </Text>
                <Text fontSize={fontSize} width="4rem">
                  {episode.node?.viewerDidTrack ? "視聴済み" : "未視聴"}
                </Text>
              </Flex>
            </ListItem>
          ) : null
        )}
      </List>
    </Container>
  )
}
