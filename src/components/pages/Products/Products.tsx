import React, {useState} from 'react'
import {ProductCard} from '@/components/ProductCard'
import {Filters} from '@/modules/products/components/Filters'
import {useRouter} from "next/router";
import {ProductApi} from "@/types/api";
import Head from "next/head";

interface Props {
  defaultProducts: ProductApi[]
}

export const Products = ({defaultProducts}: Props) => {
  const [products, setProducts] = useState(defaultProducts)
  const router = useRouter();

  const onCardClick = (id: string) => router.push('/product/' + id)

  return (
    <div>
      <Head>
        <title>Список товаров</title>
      </Head>
      <div className="flex flex-row h-full">
        <Filters />
        <div className="flex gap-10 m-10 flex-wrap flex-row justify-evenly">
          {products.map(({id, title, rating, price}) =>
            <ProductCard
              key={id}
              id={id}
              price={price}
              rating={rating}
              title={title}
              imageUrl=""
              onClick={() => onCardClick(id)}
            />
          )}
        </div>
      </div>
    </div>
  )
}