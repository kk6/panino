import { StatusState } from "@/generated/graphql"

export const getStatusState = (href: string) => {
  if (!href) {
    return StatusState.NoState
  }
  switch (href) {
    case "watching":
      return StatusState.Watching
    case "watched":
      return StatusState.Watched
    case "wanna-watch":
      return StatusState.WannaWatch
    case "on-hold":
      return StatusState.OnHold
    case "stop-watching":
      return StatusState.StopWatching
    default:
      return StatusState.NoState
  }
}

export const getTabPaths = (path: string | string[] | undefined) => {
  return [
    "watching",
    "watched",
    "wanna-watch",
    "on-hold",
    "stop-watching",
  ].indexOf(String(path))
}
