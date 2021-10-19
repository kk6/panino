import { useRouter } from "next/router"

import { Loading } from "@/components/elements/Loading"
import { useGetWorkTabsCountsQuery } from "@/generated/graphql"

import { mappingTabData } from "./mappers"
import { getTabPaths } from "./utils"
import { WorkTabs } from "./WorkTabs"

export const WorkTabsContainer: React.FC = () => {
  const router = useRouter()
  const tabIndex = getTabPaths(router.query.path)
  const { data, loading, error } = useGetWorkTabsCountsQuery()
  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    console.error(error)
    return <div>ERROR</div>
  }
  const tabData = mappingTabData(data)
  return <WorkTabs data={tabData} tabIndex={tabIndex} />
}
