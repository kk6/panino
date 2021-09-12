import NextAuth from "next-auth"
// @ts-ignore
import { GenericObject } from "next-auth/_utils"

import Annict from "../../../providers/annict"

export default NextAuth({
  providers: [
    Annict({
      clientId: process.env.ANNICT_CLIENT_ID ?? "",
      clientSecret: process.env.ANNICT_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
    },
    async session(session, token) {
      session.accessToken = (token as GenericObject).accessToken
      return session
    },
  },
})
