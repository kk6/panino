import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { getSession } from "next-auth/client"

const httpLink = createHttpLink({
  uri: "https://api.annict.com/graphql",
})

const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
  const session = await getSession()
  return {
    headers: {
      ...headers,
      authorization: session?.accessToken
        ? `Bearer ${session?.accessToken}`
        : "",
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        merge(existing, incoming) {
          if (!existing) return incoming
          return { ...existing, ...incoming }
        },
      },
    },
  }),
})
