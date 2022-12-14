import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'
import { Tab } from '@headlessui/react'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Beast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      <section className="z-40 relative -mt-[100vh] min-h-screen bg-[#1b1b1b]">
        <div className="space-y-10 py-16">

          <h2 className="text-4xl tracking-wide text-center text-white font-medium md:text-5xl ">New Promos</h2>

          <Tab.Group>
            <Tab.List>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>

        </div>
      </section>

    </div>
  )
}

export default Home
