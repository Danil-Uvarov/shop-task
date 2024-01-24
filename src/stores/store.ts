import {defineStore} from 'pinia'
import {type IProductStore} from '@/models/requests/IProductStore'

interface ProductsState {
    products: IProductStore[]
    cart: IProductStore[]
    sum: number
}

export const createStore = defineStore('products', {
    state: (): ProductsState => ({
        products: [],
        cart: [],
        sum: 0,
    }),
    getters: {},
    actions: {
        async getItem() {
            const BASE_URl = import.meta.env.VITE_BASE_URL
            const data = await fetch(`${BASE_URl}`)
            const res = await data.json()
            this.products = res.products
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
        getSum() {
          const  data = this.cart.reduce((sum, current) =>
                sum + (current.price * current.quantity),0
            )
            this.sum = data
        },
        setLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart))
        }
    }
})
