import { PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { Cart, CartItems } from '../../types/Cart'
import { Product } from '../../types/Product'

const calculateCartTotalItems = (items: CartItems[]) => {
  return items?.reduce((acc, item) => acc + item?.quantity, 0) ?? 0
}

const calculateCartUniqueItems = (items: CartItems[]) => {
  return items?.length ?? 0
}

const generateRandomShippingValue = () => {
  return Math.floor(Math.random() * 100) + 1
}

const generateRandomDiscountValue = () => {
  return Math.floor(Math.random() * 90) + 1
}

const generateCartInfo = (state: Cart, newCartItems: CartItems[]) => {
  const newCartInfoRandomShippingValue = generateRandomShippingValue()
  const newCartInfoDiscounts = generateRandomDiscountValue()
  const newCartInfoSubtotal = newCartItems.reduce(
    (acc, item) => item.price * item?.quantity + acc,
    0,
  )
  const newCartInfoTotal =
    newCartInfoSubtotal + newCartInfoRandomShippingValue - newCartInfoDiscounts

  const newCartInfo: typeof state.info = {
    shipping: newCartInfoRandomShippingValue,
    discounts: newCartInfoDiscounts,
    subTotal: newCartInfoSubtotal,
    total: newCartInfoTotal,
  }

  return newCartInfo
}

export const cartReducers = {
  addProductToCart: (state: Cart, action: PayloadAction<Product>) => {
    let newCartItems = []
    const { payload } = action

    const productExistInCart = state?.items?.find(
      (item) => item?.id === payload?.id,
    )

    if (!productExistInCart) {
      newCartItems = [...state?.items, { ...payload, quantity: 1 }]
      toast.success('Produto adicionado ao carrinho! :)')
    } else {
      newCartItems = state?.items?.map((item) => {
        if (item.id === productExistInCart?.id) {
          return {
            ...productExistInCart,
            quantity: productExistInCart?.quantity + 1,
          }
        }

        return item
      })
      toast.success(
        'Esse produto já estava no carrinho. Adicionamos +1 unidade dele pra você! :)',
        {
          duration: 3000,
        },
      )
    }

    state.items = newCartItems
    state.totalItemsCount = calculateCartTotalItems(newCartItems)
    state.uniqueItemsCount = calculateCartUniqueItems(newCartItems)
    state.info = generateCartInfo(state, newCartItems)
  },

  increaseProductQuantity: (state: Cart, action: PayloadAction<Product>) => {
    const { payload } = action
    const currentProductQuantity = state.items.find(
      (item) => item.id === payload.id,
    )

    if (!currentProductQuantity) return

    const newProductQuantity = currentProductQuantity.quantity + 1

    const newCartItems = state.items.map((item) => {
      if (item.id === payload.id) {
        return {
          ...item,
          quantity: newProductQuantity,
        }
      }

      return item
    })

    state.items = newCartItems
    state.totalItemsCount = calculateCartTotalItems(newCartItems)
    state.uniqueItemsCount = calculateCartUniqueItems(newCartItems)
    state.info = generateCartInfo(state, newCartItems)
  },

  decreaseProductQuantity: (state: Cart, action: PayloadAction<Product>) => {
    const { payload } = action
    const currentProductQuantity = state.items.find(
      (item) => item.id === payload.id,
    )

    if (!currentProductQuantity) return

    let newCartItems: CartItems[] = []
    const newProductQuantity = currentProductQuantity.quantity - 1

    if (newProductQuantity <= 0) {
      newCartItems = state?.items?.filter((item) => item.id !== payload.id)
      toast.success('Produto removido do carrinho! :(', {
        duration: 3000,
      })
    } else {
      newCartItems = state?.items?.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: newProductQuantity,
          }
        }

        return item
      })
    }

    state.items = newCartItems
    state.totalItemsCount = calculateCartTotalItems(newCartItems)
    state.uniqueItemsCount = calculateCartUniqueItems(newCartItems)
    state.info = generateCartInfo(state, newCartItems)
  },

  removeProductFromCart: (state: Cart, action: PayloadAction<Product>) => {
    const { payload } = action
    let newCartItems = []
    const productExistInCart = state?.items?.find(
      (item) => item?.id === payload?.id,
    )

    if (!productExistInCart) return

    newCartItems = state?.items?.filter((item) => item.id !== payload.id)

    state.items = newCartItems
    state.totalItemsCount = calculateCartTotalItems(newCartItems)
    state.uniqueItemsCount = calculateCartUniqueItems(newCartItems)
    state.info = generateCartInfo(state, newCartItems)
    toast.success('Produto removido do carrinho! :(', {
      duration: 3000,
    })
  },

  clearCart: (state: Cart) => {
    state.items = []
    state.totalItemsCount = 0
    state.uniqueItemsCount = 0
    state.info = {
      shipping: 0,
      subTotal: 0,
      discounts: 0,
      total: 0,
    }
    toast.success('Carrinho limpo! :)', {
      duration: 3000,
    })
  },
}
