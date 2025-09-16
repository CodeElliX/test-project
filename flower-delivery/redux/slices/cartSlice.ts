import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type CartItem = {
  _id: number
  name: string
  price: number
  count: number
}

export interface CartState {
  items: CartItem[]
  totalPrice: number
  totalCount: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
}

const recalc = (state: CartState) => {
  state.totalCount = state.items.reduce((s, it) => s + it.count, 0)
  state.totalPrice = state.items.reduce((s, it) => s + it.price * it.count, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ _id: number; name: string; price: number }>) {
      const { _id, name, price } = action.payload
      const existing = state.items.find((it) => it._id === _id)
      if (existing) {
        existing.count += 1
      } else {
        state.items.push({ _id, name, price, count: 1 })
      }
      recalc(state)
    },

    addCount(state, action: PayloadAction<number>) {
      const id = action.payload
      const it = state.items.find((i) => i._id === id)
      if (it) it.count += 1
      recalc(state)
    },

    minusCount(state, action: PayloadAction<number>) {
      const id = action.payload
      const it = state.items.find((i) => i._id === id)
      if (it) {
        it.count = Math.max(0, it.count - 1)
        if (it.count === 0) state.items = state.items.filter((i) => i._id !== id)
      }
      recalc(state)
    },

    setItemCount(state, action: PayloadAction<{ _id: number; count: number }>) {
      const { _id, count } = action.payload
      const it = state.items.find((i) => i._id === _id)
      if (it) {
        it.count = Math.max(0, Math.floor(count))
        if (it.count === 0) state.items = state.items.filter((i) => i._id !== _id)
      }
      recalc(state)
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i._id !== action.payload)
      recalc(state)
    },

    removeAllItems(state) {
      state.items = []
      state.totalCount = 0
      state.totalPrice = 0
    },

    setCart(state, action: PayloadAction<CartState>) {
      state.items = action.payload.items
      recalc(state)
    },
  },
})

export const {
  addItem,
  addCount,
  minusCount,
  setItemCount,
  removeItem,
  removeAllItems,
  setCart,
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
export type Product = { _id: number; name: string; price: number }
export default cartSlice.reducer
