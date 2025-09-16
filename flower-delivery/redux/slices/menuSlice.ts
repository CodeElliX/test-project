import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name: 'menu',
    initialState: 'shops' as 'shops' | 'cart',
    reducers: {
        setActiveTab(_state, action: PayloadAction<'shops' | 'cart'>) {
            return action.payload
        },
    },
})

export const { setActiveTab } = menuSlice.actions
export const selectActiveTab = (state: { menu: 'shops' | 'cart' }) => state.menu
export default menuSlice.reducer
