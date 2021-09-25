import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api.annict.com/graphql",
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
