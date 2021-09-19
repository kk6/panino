import { Box } from "@chakra-ui/layout"
import { useSession } from "next-auth/client"

import { Footer } from "@/components/modules/Footer"
import { Header } from "@/components/modules/Header"

export const AuthenticatedLayout: React.FC = ({ children }) => {
  const [session, _] = useSession()
  return (
    <>
      <Header user={session?.user} />
      <Box mb={24}>{children}</Box>
      <Footer />
    </>
  )
}
