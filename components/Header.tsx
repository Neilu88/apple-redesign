import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.png'

import { SearchIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/outline'
import { useSelector } from "react-redux";
import { selectBasketItems } from '../redux/basketSlice'
function Header() {
  const session = false;
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky top-0 z-30 p-2 flex items-center justify-between bg-[#E7ECEE] w-full">

      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative cursor-pointer w-14 h-14 select-none opacity-75 hover:opacity-100">
            <Image src={logo} className="object-contain fill" alt="logo" fill={true} draggable={false} />
          </div>
        </Link>
      </div>

      <div className="flex-1 hidden md:flex justify-center items-center space-x-8">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>

      <div className="flex items-center justify-center space-x-4 md:w-1/5">

        <SearchIcon className="headerIcon" />

        <Link href="/checkout">
          <div className="relative cursor-pointer select-none">
            {items.length > 0 && (
              <span className="text-white text-[10px] z-50 absolute h-4 w-4 flex items-center justify-center rounded-full -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500">
                {items.length}
              </span>)}
            
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        
        <UserIcon className="headerIcon" />

      </div>
    
    </header>
  )
}

export default Header
