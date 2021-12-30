import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showPopup: false,
}

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
		setPopup: (state) => {
			state.showPopup = !state.showPopup
		},
  },
});
  

export const { setPopup } = popUpSlice.actions
export const getPopupValue = (state) => state.popUp.showPopup;
export default popUpSlice.reducer