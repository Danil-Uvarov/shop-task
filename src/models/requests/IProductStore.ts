export interface IProductStore {
  id: number
  title: string
  price: number
  description: string
  discountPercentage: number
  category: string
  images: string
  rating: number
  stock: number
  brand: string
  thumbnail: string
  quantity?: number
}
