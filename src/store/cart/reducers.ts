import { Cart, CartItems } from '../../types/Cart'

export const cartReducers = {
  cleanCart: (state: Cart) => {
    const emptyCartItems: CartItems[] = []

    state.items = emptyCartItems
    state.totalItemsCount = 0
    state.uniqueItemsCount = 0
    state.info = {
      shipping: 0,
      subTotal: 0,
      discounts: 0,
      total: 0,
    }
  },
}
