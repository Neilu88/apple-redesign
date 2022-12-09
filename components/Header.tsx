import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.png'

function Header() {
  return (
    <header className="p-2 sticky top-0 flex items-center w-full justify-between z-30 bg-[#E7ECEE]">

      <div className="flex md:w-1/5 items-center justify-center">
        <Link href="/">
          <div className="relative h-12 w-12 cursor-pointer opacity-75 hover:opacity-100 transition select-none">
            <Image src={logo} layout="fill" objectFit="contain" alt="logo" draggable="false"/>
          </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
        <a className="headerLink">Products</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Buy</a>
      </div>

    </header>
  )
}

export default Header
