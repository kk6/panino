import { useSession } from "next-auth/client"

import { Loading } from "@/components/elements/Loading"
import { useGetUserInfoQuery } from "@/generated/graphql"

import { UserInfo } from "./UserInfo"

export const UserInfoContainer: React.FC = () => {
  const [session, _loading] = useSession()
  const { data, loading, error } = useGetUserInfoQuery({
    context: { headers: { Authorization: `bearer ${session?.accessToken}` } },
  })
  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    console.error(error)
    return <div>ERROR</div>
  }
  return (
    <UserInfo
      name={data.viewer?.name}
      username={data.viewer?.username}
      avatarUrl={data.viewer?.avatarUrl ? data.viewer.avatarUrl : ""}
      watchingCount={data.viewer?.watchingCount}
      wannaWatchCount={data.viewer?.wannaWatchCount}
      watchedCount={data.viewer?.watchedCount}
      onHoldCount={data.viewer?.onHoldCount}
      stopWatchingCount={data.viewer?.stopWatchingCount}
      recordsCount={data.viewer?.recordsCount}
    />
  )
}
