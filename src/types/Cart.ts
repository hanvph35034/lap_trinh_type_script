export type cateType = {
  id: number,
  products: productType[],
  total: number,
  discountedTotal: number,
  userId: number,
  totalProducts: number,
  totalQuantity: number

}
export type productType = {
  quantity?: number,
  total: number,
  discountPercentage: number,
  discountedPrice: number,

}