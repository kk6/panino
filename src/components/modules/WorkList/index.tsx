import { Loading } from "@/components/elements/Loading"
import { StatusState, useGetWorkListQuery } from "@/generated/graphql"

import { useWorksInfiniteScroll } from "./useWorksInfiniteScroll"
import { WorkList } from "./WorkList"

type Props = {
  state: StatusState
  workCount: number
}
export const WorkListContainer: React.FC<Props> = ({ state, workCount }) => {
  const displayCount = Number(process.env.WORK_LIST_DISPLAY_COUNT) || 10
  const { data, loading, error, fetchMore } = useGetWorkListQuery({
    variables: { state: state, first: displayCount, after: null },
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
    setWorksInfiniteScrollProps(data, dataLength, displayCount)
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
