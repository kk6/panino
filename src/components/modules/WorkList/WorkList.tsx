import { Flex } from "@chakra-ui/react"
import InfiniteScroll from "react-infinite-scroll-component"

import { Loading } from "@/components/elements/Loading"
import { WorkCard } from "@/components/elements/WorkCard"
import { Maybe, WorkEdge } from "@/generated/graphql"

type Props = {
  dataLength: number
  handleFetchMore: () => void
  hasNextPage: boolean | undefined
  workData: Maybe<WorkEdge>[]
}
export const WorkList: React.FC<Props> = ({
  dataLength,
  handleFetchMore,
  hasNextPage,
  workData,
}) => {
  return (
    <Flex wrap="wrap" bgColor="gray.200">
      <InfiniteScroll
        dataLength={dataLength}
        next={handleFetchMore}
        // @ts-ignore
        hasMore={hasNextPage}
        loader={<Loading />}
      >
        {workData.map((work, index) => (
          <WorkCard
            key={index}
            annictId={work?.node?.annictId}
            title={work?.node?.title}
            episodesCount={0}
            imageUrl={
              work?.node?.image?.recommendedImageUrl
                ? work?.node?.image?.recommendedImageUrl
                : ""
            }
            media={work?.node?.media}
          />
        ))}
      </InfiniteScroll>
    </Flex>
  )
}
