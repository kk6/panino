import { NextPage } from "next"
import { useRouter } from "next/router"

import { AuthCheck } from "@/components/elements/AuthCheck"
import { AuthenticatedLayout } from "@/components/layouts/AuthenticatedLayout"
import { EpisodeListContainer } from "@/components/modules/EpisodeList"

const Episodes: NextPage = () => {
  const router = useRouter()
  const { workId } = router.query
  return (
    <AuthCheck>
      <AuthenticatedLayout>
        <EpisodeListContainer workId={Number(workId)} />
      </AuthenticatedLayout>
    </AuthCheck>
  )
}

export default Episodes
