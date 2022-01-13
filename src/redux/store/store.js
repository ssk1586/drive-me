import { configureStore } from '@reduxjs/toolkit';
import popUpSlice from '../slices/PopupSlice/PopupSlice';
import languageSlice from '../slices/LanguageSlice/LanguageSlice';
import paginationSlice  from '../slices/PaginationCount/PaginationCount';

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
    language: languageSlice,
    page: paginationSlice, 
  },
})