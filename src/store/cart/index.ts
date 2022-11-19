import { createSlice } from "@reduxjs/toolkit"
import { cartReducers } from "./reducers"
import { Cart } from "../../types/Cart"

const initialState: Cart = {
  items: [],
  uniqueItemsCount: 0,
  totalItemsCount: 0,
  info: {
    shipping: 0,
    subTotal: 0,
    discounts: 0,
    total: 0,
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: cartReducers
})

export const { cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
