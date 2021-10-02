import { Loading } from "@/components/elements/Loading"
import { useGetUserInfoQuery } from "@/generated/graphql"

import { mappingUserInfo } from "./mappers"
import { UserInfo } from "./UserInfo"

export const UserInfoContainer: React.FC = () => {
  const { data, loading, error } = useGetUserInfoQuery()
  const userInfo = mappingUserInfo(data)
  if (loading) {
    return <Loading />
  }

  if (error || !userInfo) {
    console.error(error)
    return <div>ERROR</div>
  }
  return <UserInfo userInfo={userInfo} />
}
