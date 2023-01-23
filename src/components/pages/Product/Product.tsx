import React from 'react'
import {Button} from "@/components/ui";
import {Rating} from "@/components/Rating";
import {useToast} from "@/hooks/useToast";
import {ProductDetailsApi} from "@/types/api";
import Head from "next/head";

interface Props {
  defaultProduct: ProductDetailsApi
}

export const Product = ({defaultProduct: {title, id, description, price, rating}} : Props) => {

  const toast = useToast();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full flex flex-row">
        <div className="p-10 pr-0 flex flex-row">
          <div className="w-32 mr-5 flex flex-col justify-between" style={{minHeight: '35rem'}}>
            <div className="bg-gray-300 w-full h-44 rounded" />
            <div className="bg-gray-300 w-full h-44 rounded" />
            <div className="bg-gray-300 w-full h-44 rounded" />
          </div>
          <div className="w-96 bg-gray-300 rounded" style={{minHeight: '35rem'}} />
        </div>
        <div className="w-full p-10 mt-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between py-5">
              <h1 className="text-4xl">{title}</h1>
              <Rating size={40} />
            </div>
            <div>
              <h2 className="text-5xl">{price} руб</h2>
              <p className="mt-10 text-xl">{description}</p>
              <p className="mt-10">Вес: 10 грамм</p>
              <p className="mt-1">Размер: 10 х 10 х 10 мм</p>
            </div>
          </div>
          <div className="py-10 w-full flex gap-5">
            <Button onClick={() => toast.success('Товар добавлен в корзину!')}>Добавить в корзину</Button>
            <Button secondary>Купить в один клик</Button>
          </div>
        </div>
      </div>
    </div>
  )
}