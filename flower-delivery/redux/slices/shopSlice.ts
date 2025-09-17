import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type Shop = { _id: string; name: string }

export const fetchShops = createAsyncThunk<Shop[]>(
  'shops/fetchShops',
  async () => {
    const API_URL = "https://test-project-production-6234.up.railway.app"; // ← хардкод
    console.log("API URL:", API_URL);
    const res = await fetch(`${API_URL}/api/shops`);
    return (await res.json()) as Shop[];
  }
);

const shopSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [] as Shop[],
    selectedShop: null as string | null,
  },
  reducers: {
    setSelectedShop(state, action: PayloadAction<string>) {
      state.selectedShop = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShops.fulfilled, (state, action: PayloadAction<Shop[]>) => {
      state.shops = action.payload
    })
  },
})

export const { setSelectedShop } = shopSlice.actions
export const selectShops = (state: RootState) => state.shops.shops
export const selectSelectedShop = (state: RootState) => state.shops.selectedShop
export default shopSlice.reducer
