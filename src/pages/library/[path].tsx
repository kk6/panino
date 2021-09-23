import { NextPage } from "next"
import { useRouter } from "next/router"

import { AuthCheck } from "@/components/elements/AuthCheck"
import { AuthenticatedLayout } from "@/components/layouts/AuthenticatedLayout"
import { UserInfoContainer } from "@/components/modules/UserInfo"

const UserPage: NextPage = () => {
  const router = useRouter()
  return (
    <AuthCheck>
      <AuthenticatedLayout>
        <UserInfoContainer key={router.asPath} />
      </AuthenticatedLayout>
    </AuthCheck>
  )
}

export default UserPage
