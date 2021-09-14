import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"
import { client } from "apollo/client"
import type { AppProps } from "next/app"
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
  )
}
export default MyApp
