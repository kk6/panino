import { Flex } from "@chakra-ui/react"

import { WorkCard } from "@/components/WorkCard"
import { WatchingAnimeQuery } from "@/generated/graphql"

interface Props {
  data: WatchingAnimeQuery
}
export const WatchingList: React.FC<Props> = ({ data }) => {
  return (
    <Flex wrap="wrap" bgColor="gray.200">
      {!!data.viewer &&
        !!data.viewer.works &&
        !!data.viewer.works.nodes &&
        data.viewer.works.nodes.map((work) => (
          <WorkCard
            key={work?.annictId}
            annictId={work?.annictId}
            title={work?.title}
            episodesCount={work?.episodesCount}
            imageUrl={
              work?.image?.recommendedImageUrl
                ? work?.image?.recommendedImageUrl
                : ""
            }
            media={work?.media}
          />
        ))}
    </Flex>
  )
}
