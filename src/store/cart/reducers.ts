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

const saveCartToLocalStorage = (state: Cart) => {
  if (!localStorage || typeof window === 'undefined') return

  localStorage.setItem('@mini-commerce/cart', JSON.stringify(state))
}

const getCartFromLocalStorage = () => {
  if (!localStorage || typeof window === 'undefined') return undefined

  const cartFromStorage = localStorage.getItem('@mini-commerce/cart')

  if (!cartFromStorage) return undefined

  return JSON.parse(cartFromStorage) as Cart
}

export const cartReducers = {
  getCartFromStorage: (state: Cart) => {
    const cartFromStorage = getCartFromLocalStorage()

    if (!cartFromStorage) return

    state.cartFetchedFromState = true
    state.info = cartFromStorage?.info
    state.items = cartFromStorage?.items
    state.totalItemsCount = cartFromStorage?.totalItemsCount
    state.uniqueItemsCount = cartFromStorage?.uniqueItemsCount
  },

  addProductToCart: (state: Cart, action: PayloadAction<Product>) => {
    let newCartItems = []
    const { payload } = action

    const cartFromStorage = getCartFromLocalStorage()
    let stateToHandle = state
    let cartFetchedFromState = false

    if (cartFromStorage) {
      stateToHandle = cartFromStorage
      cartFetchedFromState = true
    }

    const productExistInCart = stateToHandle?.items?.find(
      (item) => item?.id === payload?.id,
    )

    if (!productExistInCart) {
      newCartItems = [...stateToHandle?.items, { ...payload, quantity: 1 }]
      toast.success('Produto adicionado ao carrinho! :)')
    } else {
      newCartItems = stateToHandle?.items?.map((item) => {
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
    state.info = generateCartInfo(stateToHandle, newCartItems)
    state.cartFetchedFromState = cartFetchedFromState
    saveCartToLocalStorage(state)
  },

  increaseProductQuantity: (state: Cart, action: PayloadAction<Product>) => {
    const { payload } = action
    let stateToHandle = state

    const cartFromStorage = getCartFromLocalStorage()
    let cartFetchedFromState = false

    if (cartFromStorage) {
      stateToHandle = cartFromStorage
      cartFetchedFromState = true
    }

    const currentProductQuantity = stateToHandle?.items?.find(
      (item) => item.id === payload.id,
    )

    if (!currentProductQuantity) return

    const newProductQuantity = currentProductQuantity.quantity + 1

    const newCartItems = stateToHandle.items.map((item) => {
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
    state.info = generateCartInfo(stateToHandle, newCartItems)
    state.cartFetchedFromState = cartFetchedFromState
    saveCartToLocalStorage(state)
  },

  decreaseProductQuantity: (state: Cart, action: PayloadAction<Product>) => {
    const { payload } = action
    let stateToHandle = state

    const cartFromStorage = getCartFromLocalStorage()
    let cartFetchedFromState = false

    if (cartFromStorage) {
      stateToHandle = cartFromStorage
      cartFetchedFromState = true
    }

    const currentProductQuantity = stateToHandle.items.find(
      (item) => item.id === payload.id,
    )

    if (!currentProductQuantity) return

    let newCartItems: CartItems[] = []
    const newProductQuantity = currentProductQuantity.quantity - 1

    if (newProductQuantity <= 0) {
      newCartItems = stateToHandle?.items?.filter(
        (item) => item.id !== payload.id,
      )
      toast.success('Produto removido do carrinho! :(', {
        duration: 3000,
      })
    } else {
      newCartItems = stateToHandle?.items?.map((item) => {
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
    state.info = generateCartInfo(stateToHandle, newCartItems)
    state.cartFetchedFromState = cartFetchedFromState
    saveCartToLocalStorage(state)
  },

  removeProductFromCart: (state: Cart, action: PayloadAction<Product>) => {
    const { payload } = action
    let newCartItems = []
    let stateToHandle = state

    const cartFromStorage = getCartFromLocalStorage()
    let cartFetchedFromState = false

    if (cartFromStorage) {
      stateToHandle = cartFromStorage
      cartFetchedFromState = true
    }

    const productExistInCart = stateToHandle?.items?.find(
      (item) => item?.id === payload?.id,
    )

    if (!productExistInCart) return

    newCartItems = stateToHandle?.items?.filter(
      (item) => item.id !== payload.id,
    )

    state.items = newCartItems
    state.totalItemsCount = calculateCartTotalItems(newCartItems)
    state.uniqueItemsCount = calculateCartUniqueItems(newCartItems)
    state.info = generateCartInfo(stateToHandle, newCartItems)
    state.cartFetchedFromState = cartFetchedFromState
    toast.success('Produto removido do carrinho! :(', {
      duration: 3000,
    })
    saveCartToLocalStorage(state)
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
    saveCartToLocalStorage(state)
  },
}
