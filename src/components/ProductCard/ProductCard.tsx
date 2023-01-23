import React from 'react'
import {Rating} from '../Rating'
import {useRouter} from "next/router";

interface Props {
  id: string
  title: string
  price: string
  rating: number
  imageUrl: string
  onClick: () => void
}

export const ProductCard = ({ title, price, rating, imageUrl, id, onClick }: Props) => {

  const router = useRouter();

  return (
    <div
      onClick={onClick}
      className="shadow-xl w-52 h-80 bg-white hover:scale-105 active:scale-95 transition rounded overflow-hidden cursor-pointer"
    >
      <div className="bg-gray-300 w-full h-52" />
      <div className="w-full flex flex-row justify-evenly">
        <h1 className="text-xl text-center p-2">{price} руб</h1>
        <Rating />
      </div>
      <h1 className="text-l w-full text-center p-2">{title}</h1>
    </div>
  )
}
