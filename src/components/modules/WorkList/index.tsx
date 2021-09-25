import { Flex } from "@chakra-ui/react"
import { useSession } from "next-auth/client"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import { Loading } from "@/components/elements/Loading"
import { WorkCard } from "@/components/WorkCard"
import {
  Maybe,
  StatusState,
  useGetWorkListQuery,
  WorkEdge,
} from "@/generated/graphql"

interface Props {
  count: number
  state: StatusState
  workCount: number
}
export const WorkListContainer: React.FC<Props> = ({
  count,
  state,
  workCount,
}) => {
  const [session, _loading] = useSession()
  const [workData, setWorkData] = useState<Maybe<WorkEdge>[] | undefined>([])
  const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(true)
  const [cursor, setCursor] = useState<string | null | undefined>(null)
  const [dataLength, setDataLength] = useState(workCount)

  const { data, loading, error, fetchMore } = useGetWorkListQuery({
    variables: { state: state, first: count, after: null },
    context: { headers: { Authorization: `bearer ${session?.accessToken}` } },
  })
  useEffect(() => {
    // @ts-ignore
    setWorkData(data?.viewer?.works?.edges)
    setHasNextPage(data?.viewer?.works?.pageInfo.hasNextPage)
    setCursor(data?.viewer?.works?.pageInfo.endCursor)
  }, [data])

  const handleFetchMore = async () => {
    const { data } = await fetchMore({
      variables: { after: cursor },
      context: { headers: { Authorization: `bearer ${session?.accessToken}` } },
    })
    // @ts-ignore
    setWorkData([...workData, ...data.viewer?.works?.edges])
    setHasNextPage(data.viewer?.works?.pageInfo.hasNextPage)
    setCursor(data.viewer?.works?.pageInfo.endCursor)
    setDataLength(dataLength + count)
  }

  if (loading) {
    return <Loading />
  }

  if (error || !workData) {
    console.error(error)
    return <div>ERROR</div>
  }

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
