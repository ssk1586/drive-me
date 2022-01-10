import { configureStore } from '@reduxjs/toolkit';
import popUpSlice  from '../slices/PopupSlice/PopupSlice';
import selectedUserSlice from '../slices/SelectedUserSlice/SelectedUser';

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
    selectedUser: selectedUserSlice
  },
})