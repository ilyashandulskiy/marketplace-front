import React from 'react'
import {Button} from "@/components/ui";
import {Rating} from "@/components/Rating";
import {useToast} from "@/hooks/useToast";
import {ProductDetailsApi} from "@/types/api";
import Head from "next/head";
import {money} from "@/utils/money";

interface Props {
  defaultProduct: ProductDetailsApi
}

export const Product = ({defaultProduct: {title, id, description, price, rating, imageUrl}} : Props) => {

  const toast = useToast();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-row">
        <div className="p-10 pr-0 flex flex-row">
          <img alt={title} src={imageUrl} className="flex-none bg-gray-300 rounded" style={{minWidth: 400, minHeight: 500, maxWidth: 400, maxHeight: 500}} />
        </div>
        <div className="w-full p-10 mt-5 flex flex-col justify-between" >
          <div>
            <div className="flex justify-between pb-5">
              <h1 className="text-4xl" style={{maxWidth: 700}}>{title}</h1>
              <Rating rating={rating} size={40} />
            </div>
            <div>
              <h2 className="text-5xl">{money(price).format()}</h2>
              <p className="mt-10">{description}</p>
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