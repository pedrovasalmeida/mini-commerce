import { Product } from './Product'

export interface CartItems extends Product {
  quantity: number
}

export interface Cart {
  cartFetchedFromState: boolean
  items: CartItems[]
  uniqueItemsCount: number
  totalItemsCount: number
  info: {
    shipping: number
    subTotal: number
    discounts: number
    total: number
  }
}
