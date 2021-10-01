import { Loading } from "@/components/elements/Loading"
import { StatusState, useGetWorkListQuery } from "@/generated/graphql"

import { useWorksInfiniteScroll } from "./useWorksInfiniteScroll"
import { WorkList } from "./WorkList"

type Props = {
  count: number
  state: StatusState
  workCount: number
}
export const WorkListContainer: React.FC<Props> = ({
  count,
  state,
  workCount,
}) => {
  const { data, loading, error, fetchMore } = useGetWorkListQuery({
    variables: { state: state, first: count, after: null },
  })
  const {
    workData,
    hasNextPage,
    cursor,
    dataLength,
    setWorksInfiniteScrollProps,
  } = useWorksInfiniteScroll(workCount, data)

  const handleFetchMore = async () => {
    const { data } = await fetchMore({
      variables: { after: cursor },
    })
    setWorksInfiniteScrollProps(data, dataLength, count)
  }

  if (loading || !workData) {
    return <Loading />
  }

  if (error) {
    console.error(error)
    return <div>ERROR</div>
  }

  return (
    <WorkList
      dataLength={dataLength}
      handleFetchMore={handleFetchMore}
      hasNextPage={hasNextPage}
      workData={workData}
    />
  )
}
