import axios from 'axios'

const axiosInstance = axios.create({baseURL: process.env.NEXT_PUBLIC_API_URL})

export const http = {
  async get<T>(url: string) {
    return (await axiosInstance.get(url)).data as T
  },
  async post<T>(url: string, body: any) {
    return (await axiosInstance.post(url, body)).data as T
  },
  async put<T>(url: string, body: any) {
    return (await axiosInstance.put(url, body)).data as T
  },
  async delete<T>(url: string) {
    return (await axiosInstance.delete(url)).data as T
  }
}
