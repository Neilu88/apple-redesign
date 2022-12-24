import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';


interface BasketState {
  items: Product[];
}

const initialState = { items: [] } as BasketState;

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
        state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state: BasketState, action: PayloadAction<{ id: string }>) => {
        const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
        );

        let newBasket = [...state.items];
        if (index >= 0) {
            newBasket.splice(index, 1);
        }
        else 
        {
            console.log(`Cant remove product (id: ${action.payload.id}) as it is not in cart!`)
        }

        state.items = newBasket;
    }

  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
    state.basket.items.filter((item: Product) => item._id === id);
}

export default basketSlice.reducer;