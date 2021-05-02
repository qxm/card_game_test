import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../actions/cardSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
