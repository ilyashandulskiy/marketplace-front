import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Products } from '../../pages/Products'
import { Product } from '../../pages/Product'

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/home" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
}
