import { useSession } from "next-auth/client"

import { Footer } from "@/components/modules/Footer"
import { Header } from "@/components/modules/Header"

export const AuthenticatedLayout: React.FC = ({ children }) => {
  const [session, _] = useSession()
  return (
    <>
      <Header user={session?.user} />
      {children}
      <Footer />
    </>
  )
}
