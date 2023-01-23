import React from 'react'
import {ProductCard} from '@/components/ProductCard'
import {Filters} from '@/modules/products/components/Filters'
import {useRouter} from "next/router";

export const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const router = useRouter();

  const onCardClick = (id: string) => router.push('/product/' + id)

  return (
    <div>
      <div className="flex flex-row h-full">
        <Filters />
        <div className="flex gap-10 m-10 flex-wrap flex-row justify-evenly">
          {products.map((key) =>
            <ProductCard
              key={key}
              id="1"
              price="1 000"
              rating={5}
              title="Название товара"
              imageUrl=""
              onClick={() => onCardClick("1")}
            />
          )}
        </div>
      </div>
    </div>
  )
}