import { configureStore } from '@reduxjs/toolkit';
import popUpSlice  from '../slices/PopupSlice/PopupSlice';

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
  },
})