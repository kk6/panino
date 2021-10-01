import { Box } from "@chakra-ui/layout"

import { Footer } from "@/components/modules/Footer"

export const AuthenticatedLayout: React.FC = ({ children }) => {
  return (
    <>
      <Box mb={24}>{children}</Box>
      <Footer />
    </>
  )
}
