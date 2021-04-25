import { configureStore } from '@reduxjs/toolkit';

import bookListReducer from '../components/organisms/bookList/bookListSlice';
import cartViewReducer from '../components/templates/cartView/cartViewSlice';

export const store = configureStore({
  reducer: {
    bookList: bookListReducer,
    cartBookList: cartViewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
