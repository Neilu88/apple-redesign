import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Beast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Landing />
      </main>

    </div>
  )
}

export default Home
