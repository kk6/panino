export default function Annict(options) {
  return {
    id: "annict",
    name: "Annict",
    type: "oauth",
    version: "2.0",
    scope: "",
    params: { grant_type: "authorization_code" },
    accessTokenUrl: "https://api.annict.com/oauth/token",
    authorizationUrl:
      "https://api.annict.com/oauth/authorize?response_type=code",
    profileUrl: "https://api.annict.com/v1/me",
    async profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        username: profile.username,
        email: profile.email,
        image: profile.avatar_url,
      }
    },
    ...options,
  }
}
