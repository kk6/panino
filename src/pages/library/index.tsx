import { NextPage } from "next"

import { AuthCheck } from "@/components/elements/AuthCheck"
import { AuthenticatedLayout } from "@/components/layouts/AuthenticatedLayout"
import { UserInfoContainer } from "@/components/modules/UserInfo"

const UserPage: NextPage = () => {
  return (
    <AuthCheck>
      <AuthenticatedLayout>
        <UserInfoContainer />
      </AuthenticatedLayout>
    </AuthCheck>
  )
}

export default UserPage
