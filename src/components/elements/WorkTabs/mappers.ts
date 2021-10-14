import { GetWorkTabsCountsQuery } from "@/generated/graphql"

import { TabData } from "./types"

export const mappingTabData = (data: GetWorkTabsCountsQuery): TabData[] => {
  return [
    {
      count: data.viewer?.watchingCount || 0,
      text: "見てる",
      href: "watching",
    },
    { count: data.viewer?.watchedCount || 0, text: "見た", href: "watched" },
    {
      count: data.viewer?.wannaWatchCount || 0,
      text: "見たい",
      href: "wanna-watch",
    },
    { count: data.viewer?.onHoldCount || 0, text: "中断", href: "on-hold" },
    {
      count: data.viewer?.stopWatchingCount || 0,
      text: "中止",
      href: "stop-watching",
    },
  ]
}
