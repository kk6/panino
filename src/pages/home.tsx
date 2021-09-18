import type { NextPage } from "next"
import Head from "next/head"

import { AuthCheck } from "@/components/elements/AuthCheck"
import { AuthenticatedLayout } from "@/components/layouts/AuthenticatedLayout"
import { WatchingAnimeContainer } from "@/components/modules/WatchingAnime"

const Home: NextPage = () => {
  return (
    <AuthCheck>
      <AuthenticatedLayout>
        <Head>
          <title>Panino</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <WatchingAnimeContainer />
      </AuthenticatedLayout>
    </AuthCheck>
  )
}

export default Home
