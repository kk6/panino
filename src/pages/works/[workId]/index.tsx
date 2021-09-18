import { Heading } from "@chakra-ui/layout"
import { NextPage } from "next"

import { AuthCheck } from "@/components/elements/AuthCheck"
import { AuthenticatedLayout } from "@/components/layouts/AuthenticatedLayout"
import WorkDetail from "@/components/modules/WorkDetail"

const Work: NextPage = () => {
  return (
    <AuthCheck>
      <AuthenticatedLayout>
        <Heading>タイトル</Heading>
        <WorkDetail />
      </AuthenticatedLayout>
    </AuthCheck>
  )
}

export default Work
