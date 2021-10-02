import { GetUserInfoQuery } from "@/generated/graphql"

import { TUserInfo } from "./types"

export const mappingUserInfo = (
  data: GetUserInfoQuery | undefined
): TUserInfo | undefined => {
  if (!data) {
    return
  }
  const userInfo = {
    name: data.viewer?.name || "",
    username: data.viewer?.username || "",
    avatarUrl: data.viewer?.avatarUrl ? data.viewer.avatarUrl : "",
    watchingCount: data.viewer?.watchingCount || 0,
    wannaWatchCount: data.viewer?.wannaWatchCount || 0,
    watchedCount: data.viewer?.watchedCount || 0,
    onHoldCount: data.viewer?.onHoldCount || 0,
    stopWatchingCount: data.viewer?.stopWatchingCount || 0,
    recordsCount: data.viewer?.recordsCount || 0,
  }
  return userInfo
}
