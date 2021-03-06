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

import { RecordDialogContainer } from "@/components/elements/RecordDialog"
import { StatusSelect } from "@/components/elements/StatusSelect"

import { TEpisode, TWork } from "./types"

type Props = {
  work: TWork
  episodes: TEpisode[]
  title: string
  episodeId: string
  episodeNumberText: string
  onClickEpisodeRow: (episode: TEpisode, onOpenRecordDialog: () => void) => void
  isOpenRecordDialog: boolean
  onOpenRecordDialog: () => void
  onCloseRecordDialog: () => void
  onChangeStatus: (
    e: React.ChangeEvent<HTMLSelectElement>,
    workId: string
  ) => void
}
export const EpisodeList: React.FC<Props> = ({
  work,
  episodes,
  title,
  episodeId,
  episodeNumberText,
  onClickEpisodeRow,
  isOpenRecordDialog,
  onOpenRecordDialog,
  onCloseRecordDialog,
  onChangeStatus,
}) => {
  const fontSize = "sm"

  return (
    <Container>
      <Image src={work.image} alt={work.title} />
      <Flex justify="space-between" alignItems="center">
        <Flex alignItems="center">
          <Badge>{work.media}</Badge>
          <Heading p={4} size="sm">
            {work.title}
          </Heading>
        </Flex>
        <Flex>
          <StatusSelect
            state={work.state}
            onChangeFunc={(e) => onChangeStatus(e, work.id)}
          />
        </Flex>
      </Flex>
      <VStack
        mt={4}
        as={List}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {episodes.map((episode) =>
          episode ? (
            <Box
              as={ListItem}
              key={episode.id}
              onClick={() => onClickEpisodeRow(episode, onOpenRecordDialog)}
            >
              <Flex justify="space-between">
                <Text fontSize={fontSize} width="4rem">
                  {episode.numberText}
                </Text>
                <Text fontSize={fontSize} flex={1}>
                  {episode.title}
                </Text>
                <Text fontSize={fontSize} width="2rem">
                  <Icon
                    as={episode.viewerDidTrack ? ImCheckmark : ImCheckmark2}
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
      <RecordDialogContainer
        title={title}
        episodeId={episodeId}
        episodeNumberText={episodeNumberText}
        isOpen={isOpenRecordDialog}
        onClose={onCloseRecordDialog}
      />
    </Container>
  )
}
