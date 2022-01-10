import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUser: [],
}

export const selectedUserSlice = createSlice({
  name: 'selectedUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.selectedUser.push(action.payload)
    },
  },
});

export const { addUser } = selectedUserSlice.actions
export const getSelectedUser = (state) => state.selectedUser.selectedUser;
export default selectedUserSlice.reducer
