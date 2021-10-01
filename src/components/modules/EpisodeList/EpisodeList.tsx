import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { ImCheckmark, ImCheckmark2 } from "react-icons/im"

import { StatusSelect } from "@/components/elements/StatusSelect"
import { GetEpisodeListQuery } from "@/generated/graphql"

type Props = {
  data: GetEpisodeListQuery
}
export const EpisodeList: React.FC<Props> = ({ data }) => {
  const work = data.searchWorks?.edges ? data.searchWorks?.edges[0] : null
  const fontSize = "sm"
  const onChangeFunc = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  const state = work?.node?.viewerStatusState?.toString()
  return (
    <Container>
      <Image
        src={
          work?.node?.image?.recommendedImageUrl
            ? work.node.image.recommendedImageUrl
            : "/no-image.png"
        }
        alt={work?.node?.title}
      />
      <Flex justify="space-between" alignItems="center">
        <Flex alignItems="center">
          <Badge>{work?.node?.media}</Badge>
          <Heading p={4} size="sm">
            {work?.node?.title}
          </Heading>
        </Flex>
        <Flex>
          <StatusSelect state={state} onChangeFunc={onChangeFunc} />
        </Flex>
      </Flex>
      <VStack
        mt={4}
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
