import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import { useEffect } from "react"

import { Loading } from "@/components/elements/Loading"

export const AuthCheck: React.FC = ({ children }) => {
  const [session, loading] = useSession()
  const hasUser = !!session?.user
  const router = useRouter()
  const path = router.asPath
  useEffect(() => {
    if (path === "/" && hasUser) {
      router.push("/home")
    } else if (!loading && !hasUser) {
      router.push("/")
    }
  }, [loading, hasUser, path])
  if (loading || (path === "/" && hasUser) || (path !== "/" && !hasUser)) {
    return <Loading />
  }
  return <>{children}</>
}
