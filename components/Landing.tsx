import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

function Landing() {
  return (
    <section className="sticky top-0 px-8 flex items-center justify-between mx-auto max-w-[1350px] h-screen">
      
      <div className="space-y-8">

        <h1 className="select-none xl:text-7xl font-semibold space-y-3 tracking-wide text-5xl lg:text-6xl">
            <span className="landingText bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Powered
            </span>
            <span className="landingText">
                By Intellect
            </span>
            <span className="landingText">
                Driven By Values
            </span>
        </h1>

        <div className="space-x-8">
        <Button title={"Buy Now"} />
        <a className="link">Learn More</a>
        </div>

      </div>
      <div className="select-none transition-all duration-500 relative w-[450px] h-[450px] lg:w-[600px] lg:h-[650px] hidden md:inline">
        <Image src={"/iphone.png"} className="object-contain" alt="iphone" fill={true} draggable={false} />
      </div>

    </section>
  )
}

export default Landing
