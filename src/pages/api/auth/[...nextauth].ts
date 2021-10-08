import * as Sentry from "@sentry/nextjs"
import NextAuth from "next-auth"
// @ts-ignore
import { GenericObject } from "next-auth/_utils"

import Annict from "@/providers/annict"

export default NextAuth({
  providers: [
    Annict({
      clientId: process.env.ANNICT_CLIENT_ID ?? "",
      clientSecret: process.env.ANNICT_CLIENT_SECRET ?? "",
      scope: process.env.ANNICT_SCOPE ?? "",
    }),
  ],
  callbacks: {
    async jwt(token, _user, account, _profile, _isNewUser) {
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
  // Sentry の設定
  // https://github.com/nextauthjs/next-auth/issues/2532#issuecomment-931774807
  logger: {
    error(code, metadata) {
      Sentry.captureException({ code, metadata })
    },
    warn: () => {
      // no-op
    },
    debug: () => {
      // no-op
    },
  },
})
