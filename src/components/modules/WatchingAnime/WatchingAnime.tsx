import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

import { WatchingAnimeQuery } from "@/generated/graphql"

interface Props {
  data: WatchingAnimeQuery
}
export const WatchingAnime: React.FC<Props> = ({ data }) => {
  return (
    <VStack align="stretch" spacing={4}>
      {!!data.viewer &&
        !!data.viewer.works &&
        !!data.viewer.works.nodes &&
        data.viewer.works.nodes.map((work) => (
          <WorkCard
            key={work?.annictId}
            annictId={work?.annictId}
            title={work?.title}
            episodesCount={work?.episodesCount}
          />
        ))}
    </VStack>
  )
}

interface WorkCardProps {
  annictId: number | undefined
  title: string | undefined
  episodesCount: number | undefined
}
const WorkCard: React.FC<WorkCardProps> = ({
  annictId,
  title,
  episodesCount,
}) => {
  const href = `works/${annictId}/episodes`
  return (
    <Box p={5} shadow="md">
      <Heading fontSize="md">
        <Link href={href}>{title}</Link>
      </Heading>
      <Text mt={4}>全 {episodesCount} 話</Text>
    </Box>
  )
}
