import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react"
import { ImCheckmark, ImCheckmark2 } from "react-icons/im"

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
      <VStack
        as={List}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {work?.node?.episodes?.edges?.map((episode) =>
          episode ? (
            <Box as={ListItem} key={episode.node?.id}>
              <Flex justify="space-between">
                <Text fontSize={fontSize} width="4rem">
                  {episode.node?.numberText}
                </Text>
                <Text fontSize={fontSize} flex={1}>
                  {episode.node?.title
                    ? episode.node?.title
                    : "（タイトル未定）"}
                </Text>
                <Text fontSize={fontSize} width="2rem">
                  <Icon
                    as={
                      episode.node?.viewerDidTrack ? ImCheckmark : ImCheckmark2
                    }
                    mr="2.5"
                    fontSize="22px"
                    color="gray.800"
                  />
                </Text>
              </Flex>
            </Box>
          ) : null
        )}
      </VStack>
    </Container>
  )
}
