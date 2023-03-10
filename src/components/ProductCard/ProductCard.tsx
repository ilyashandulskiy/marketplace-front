import React from 'react'
import {Rating} from '../Rating'
import {money} from "@/utils/money";

interface Props {
  id: string
  title: string
  price: string
  rating: number
  imageUrl: string
  onClick: () => void
}

export const ProductCard = ({ title, price, rating, imageUrl, id, onClick }: Props) => {

  return (
    <div
      onClick={onClick}
      className="shadow-xl w-52 h-80 bg-white hover:scale-105 active:scale-95 transition rounded cursor-pointer"
    >
      <img alt={title} src={imageUrl} className="bg-gray-300 w-full h-52" />
      <div className="w-full flex flex-row justify-evenly">
        <h1 className="text-xl text-center p-2">{money(price).format()}</h1>
        <Rating rating={rating} />
      </div>
      <div className="p-2">
        <h1 className="text-l w-full text-center limitedText">{title}</h1>
      </div>
    </div>
  )
}
