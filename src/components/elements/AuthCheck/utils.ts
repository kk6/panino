export const dispatch = (loading: boolean, path: string, hasUser: boolean) => {
  let dist = ""
  if (path === "/" && hasUser) {
    dist = "/home"
  } else if (!loading && !hasUser) {
    dist = "/"
  }
  return dist
}

export const isDisplayLoading = (
  loading: boolean,
  path: string,
  hasUser: boolean
) => {
  return loading || (path === "/" && hasUser) || (path !== "/" && !hasUser)
}
