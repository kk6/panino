import { useEffect, useState } from "react"

import { GetWorkListQuery, Maybe, WorkEdge } from "@/generated/graphql"

export const useWorksInfiniteScroll = (
  workCount: number,
  data: GetWorkListQuery | undefined
) => {
  const [workData, setWorkData] = useState<Maybe<WorkEdge>[] | undefined>([])
  const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(true)
  const [cursor, setCursor] = useState<string | null | undefined>(null)
  const [dataLength, setDataLength] = useState(workCount)

  useEffect(() => {
    // @ts-ignore
    setWorkData(data?.viewer?.works?.edges)
    setHasNextPage(data?.viewer?.works?.pageInfo.hasNextPage)
    setCursor(data?.viewer?.works?.pageInfo.endCursor)
  }, [data])

  const setWorksInfiniteScrollProps = (
    data: GetWorkListQuery,
    dataLength: number,
    count: number
  ) => {
    // @ts-ignore
    setWorkData([...workData, ...data.viewer?.works?.edges])
    setHasNextPage(data.viewer?.works?.pageInfo.hasNextPage)
    setCursor(data.viewer?.works?.pageInfo.endCursor)
    setDataLength(dataLength + count)
  }

  return {
    workData,
    hasNextPage,
    cursor,
    dataLength,
    setWorksInfiniteScrollProps,
  }
}
