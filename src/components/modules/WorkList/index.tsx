import { useEffect, useState } from "react"

import { Loading } from "@/components/elements/Loading"
import {
  Maybe,
  StatusState,
  useGetWorkListQuery,
  WorkEdge,
} from "@/generated/graphql"

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
  const [workData, setWorkData] = useState<Maybe<WorkEdge>[] | undefined>([])
  const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(true)
  const [cursor, setCursor] = useState<string | null | undefined>(null)
  const [dataLength, setDataLength] = useState(workCount)

  const { data, loading, error, fetchMore } = useGetWorkListQuery({
    variables: { state: state, first: count, after: null },
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
    })
    // @ts-ignore
    setWorkData([...workData, ...data.viewer?.works?.edges])
    setHasNextPage(data.viewer?.works?.pageInfo.hasNextPage)
    setCursor(data.viewer?.works?.pageInfo.endCursor)
    setDataLength(dataLength + count)
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
