import { defineStore } from 'pinia'
import { type IProductStore } from '@/models/requests/IProductStore'

interface ProductsState {
  products: IProductStore[]
  cart: IProductStore[]
}

export const createStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [],
    cart: []
  }),
  getters: {},
  actions: {
    async getItem() {
      const BASE_URl = import.meta.env.VITE_BASE_URL
      const data = await fetch(`${BASE_URl}`)
      this.products = await data.json()
    },
    addCart(index: number) {
      const productRepeat = this.cart.findIndex((item) => {
        return item.id === this.products[index].id
      })

      if (productRepeat !== -1) {
        this.cart[productRepeat].quantity++
        this.setLocalStorage()
        return
      }

      const newProductCart = this.products[index]
      newProductCart.quantity = 1
      this.cart.push(newProductCart)
      this.setLocalStorage()
    },
    setLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
})
