import { CreateProductApi, ProductApi, ProductDetailsApi } from '../types/api'
import { http } from '../utils/http'

export const useApi = () => ({

  async createProduct (product: CreateProductApi) {
    return await http.post<ProductDetailsApi>('products', product)
  },

  async getProducts () {
    return await http.get<ProductApi[]>('products')
  },

  async getProductDetails (id: string) {
    return await http.get<ProductDetailsApi>('products/' + id)
  },

  async deleteProduct (id: string) {
    return await http.delete('products/' + id)
  }

})
