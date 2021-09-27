import { Loading } from "@/components/elements/Loading"
import { useWatchingAnimeQuery } from "@/generated/graphql"

import { WatchingList } from "./WatchingList"

export const WatchingListContainer: React.FC = () => {
  const { data, loading, error } = useWatchingAnimeQuery()
  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    console.error(error)
    return <div>ERROR</div>
  }

  return <WatchingList data={data} />
}
