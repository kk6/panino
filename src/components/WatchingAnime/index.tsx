import { useSession } from "next-auth/client"

import { Loading } from "@/components/Loading"
import { useWatchingAnimeQuery } from "@/generated/graphql"

import { WatchingAnime } from "./WatchingAnime"

export const WatchingAnimeContainer: React.FC = () => {
  const [session, _loading] = useSession()
  const { data, loading, error } = useWatchingAnimeQuery({
    context: { headers: { Authorization: `bearer ${session?.accessToken}` } },
  })
  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    console.error(error)
    return <div>ERROR</div>
  }

  return <WatchingAnime data={data} />
}
