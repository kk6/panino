import { GetEpisodeListQuery } from "@/generated/graphql"

import { TEpisode, TWork } from "./types"

// TODO: 脱any
// @ts-ignore
// eslint-disable-next-line
const mappingWorkData = (work: any): TWork => {
  return {
    state: work?.node?.viewerStatusState?.toString() || "",
    image: work?.node?.image?.recommendedImageUrl
      ? work.node.image.recommendedImageUrl
      : "/no-image.png",
    title: work?.node?.title || "",
    media: work?.node?.media || "",
  }
}

// TODO: 脱any
// @ts-ignore
// eslint-disable-next-line
const mappingEpisodes = (work: any): TEpisode[] => {
  // @ts-ignore
  // eslint-disable-next-line
  return work?.node?.episodes?.edges?.map((episode: any) => ({
    id: episode?.node?.id,
    numberText: episode?.node?.numberText,
    title: episode?.node?.title ? episode.node?.title : "（タイトル未定）",
    viewerDidTrack: episode?.node?.viewerDidTrack,
  }))
}

export const mappingWorkWithEpisodes = (data: GetEpisodeListQuery) => {
  const _work = data.searchWorks?.edges ? data.searchWorks?.edges[0] : null
  const work = mappingWorkData(_work)
  const episodes = mappingEpisodes(_work)

  return {
    work,
    episodes,
  }
}
