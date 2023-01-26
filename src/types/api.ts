export interface CreateProductApi {
  title: string
  price: string
  imageUrls: string[]
  description: string
  weightKg?: number
  amount: number
  sizeMm?: { width: number, height: number, depth: number }
  categoryId: string
  color: string
}

export interface ProductDetailsApi {
  id: string
  title: string
  price: string
  rating: number
  imageUrl: string
  description: string
  weightKg?: number
  amount: number
  sizeMm?: { width: number, height: number, depth: number }
  categoryId: string
  storeId: string
  color?: string
  canBuy: boolean
}

export interface ProductApi {
  id: string
  title: string
  price: string
  rating: number
  imageUrl: string
}
