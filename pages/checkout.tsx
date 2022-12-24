import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { selectBasketItems } from '../redux/basketSlice'
import { useSelector } from "react-redux"
import Button from '../components/Button'
import { useRouter } from 'next/router'
import CheckoutProduct from '../components/CheckoutProduct'


function Checkout() {
  const router = useRouter()
  const items = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[]}
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
        (results[item._id] = results[item._id] || []).push(item)
        return results
    }, {} as { [key: string]: Product[]})
    setGroupedItemsInBasket(groupedItems);
  }, [items])


  return (
    <div className="min-h-screen overflow-hidden bg-[#E7ECEE]">
      <Head>
        <title>Cart - Beast</title>
      </Head>

      <Header />

      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
            <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
                {items.length > 0 ? "Review your cart." : "Your cart is empty."}
            </h1>
            <p className="my-4">Free delivery and free returns</p>

            {items.length === 0 && (
                <Button title="Continue Shopping" onClick={()=> router.push("/")} />
            )}
        </div>

        {items.length > 0 && (
            <div className="mx-5 md:mx-8 ">
                {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <CheckoutProduct id={key} key={key} items={items} />
                ))}
            </div>
        )}
      </main>
    </div>
  )
}

export default Checkout
