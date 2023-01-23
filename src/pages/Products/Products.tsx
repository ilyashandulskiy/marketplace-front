import React from 'react'
import { ProductCard } from '../../components/ProductCard'
import { SearchBar } from './components/SearchBar'
import { Filters } from './components/Filters'

export const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <div className="w-full flex justify-center pt-5">
        <SearchBar />
      </div>
      <div className="flex flex-row h-full">
        <Filters />
        <div className="flex gap-10 m-10 flex-wrap flex-row justify-evenly">
          {products.map((key) => <ProductCard key={key} id="1" price="1 000" rating={5} title="Название товара" imageUrl="" />)}
        </div>
      </div>
    </div>
  )
}
