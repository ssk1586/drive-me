import { configureStore } from '@reduxjs/toolkit';
import popUpSlice from '../slices/PopupSlice/PopupSlice';
import languageSlice from '../slices/LanguageSlice/LanguageSlice';

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
    language: languageSlice,
  },
})