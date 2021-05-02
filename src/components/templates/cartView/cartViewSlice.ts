import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../app/store';

interface RemoveBookFromCartProps {
  quantity: number;
  id: string;
}
export interface CartViewActionsProps extends RemoveBookFromCartProps {
  image: string;
  title: string;
  author: string;
  price: number;
}

const initialState: CartViewActionsProps[] = [];

const cartViewSlice = createSlice({
  name: 'cartBookList',
  initialState,
  reducers: {
    addToCartList: (state, { payload }: PayloadAction<CartViewActionsProps>) => {
      const { id, image, title, author, price, quantity } = payload;
      const bookIndex = state.findIndex((element: CartViewActionsProps) => element.id == id);

      if (!state.some((e) => e.id === id)) {
        state.push({ id, image, title, author, price, quantity });
      } else {
        state[bookIndex].quantity += 1;
      }
    },
    removeBookFromCart: (state, { payload }: PayloadAction<RemoveBookFromCartProps>) => {
      const { id, quantity } = payload;
      const bookIndex = state.findIndex((e) => e.id == id);

      if (quantity > 1) {
        state[bookIndex].quantity -= 1;
      } else {
        return state.filter((book) => book.id !== id);
      }
    },
  },
});

export const selectCartBookList = (state: RootState) => state.cartBookList;
export const { addToCartList, removeBookFromCart } = cartViewSlice.actions;
export default cartViewSlice.reducer;
