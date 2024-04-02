import { TpProducts } from '~/types/Product'
import instance from '.'
export const createProduct = async (product: TpProducts) => {
  try {
    const { data } = await instance.post(`/products`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const updateProduct = async (product: TpProducts) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deleteProduct = async (id: string) => {
  try {
    await instance.delete(`/products/${id}`)
  } catch (error) {
    console.log(error)
  }
}
export const getProducts = async () => {
  try {
    const { data } = await instance.get('/products')
    return data
  } catch (error) {
    console.log(error)
  }
}
export const getProduct = async (id: string) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
