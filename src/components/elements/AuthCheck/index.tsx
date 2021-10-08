import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import { useEffect } from "react"

import { Loading } from "@/components/elements/Loading"

import { dispatch, isDisplayLoading } from "./utils"

export const AuthCheck: React.FC = ({ children }) => {
  const [session, loading] = useSession()
  const hasUser = !!session?.user
  const router = useRouter()
  const path = router.asPath
  useEffect(() => {
    const dist = dispatch(loading, path, hasUser)
    if (dist) {
      router.push(dist)
    }
  }, [loading, hasUser, path])
  if (isDisplayLoading(loading, path, hasUser)) {
    return <Loading />
  }
  return <>{children}</>
}
