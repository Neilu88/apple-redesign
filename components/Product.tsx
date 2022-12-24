import { ShoppingCartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import {useDispatch } from 'react-redux'
import { addToBasket } from '../redux/basketSlice'
import { toast } from 'react-hot-toast'

interface Props {
    product: Product;
}
function Product({ product }: Props) {
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket(product));
        toast.success(`${product.title} added to cart`, {
            position: "bottom-center",
        })
    }
  return (
    <div className="md:w-[400px] p-6 flex flex-col md:p-10 space-y-3 select-none w-[320px] h-full  rounded-xl bg-[#35383C]">
        <div className="relative h-64 md:h-72 w-full">
            <Image className="object-contain" src={urlFor(product.image[0]).url()} alt="product image" fill={true} draggable={false} />
        </div>
        
        <div className="flex flex-1 items-center justify-between">
            <div className="text-white text-xl md:text-2xl space-y-2">
                <p>
                    {product.title}
                </p>
                <p>
                    ${product.price}
                </p>
            </div>
            <div onClick={addItemToBasket} className="flex flex-shrink-0 items-center justify-center h-16 w-16 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]">
                <ShoppingCartIcon className='h-8 w-8 text-white'  />
            </div>
        </div>
        
    </div>
  )
}

export default Product
