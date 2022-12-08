import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="">
      <div className="relative h-20 w-20 cursor-pointer opacity-75 hover:opacity-50 transition select-none">
        <Image src="https://logopond.com/logos/0c283734b9d338384b1264ce6afdeb68.png" layout="fill" objectFit="contain" alt="logo" draggable="false"/>
      </div>
    </header>
  )
}

export default Header
