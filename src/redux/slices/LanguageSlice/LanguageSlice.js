import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: 'ua',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
		setLanguage: (state, {payload}) => {
			state.language = payload
		},
  },
});
  

export const { setLanguage } = languageSlice.actions
export const getLanguageValue = (state) => state.language.language;
export default languageSlice.reducer