import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
		increment: (state) => {
			state.page += 1
    },
    decrement: (state) => {
      state.page -= 1
    },
    setDefault: (state) => {
      state.page = 1
    }
  },
});
  

export const { increment, decrement, setDefault } = paginationSlice.actions
export default paginationSlice.reducer