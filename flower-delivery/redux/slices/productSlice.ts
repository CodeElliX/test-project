import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Product } from './cartSlice'

export const fetchProducts = createAsyncThunk<Product[], { shopId: string; query: string }>(
  'products/fetchProducts',
  async ({ shopId, query }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shops/${shopId}/products${query}`);
    return (await res.json()) as Product[];
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_state, action: PayloadAction<Product[]>) => {
      return action.payload
    })
  },
})

export const selectProducts = (state: RootState) => state.products
export default productSlice.reducer
