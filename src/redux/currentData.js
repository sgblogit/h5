import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentPage: 9,
	currentStep: 0,
	currentRecord: [],
	prevRecord: [],
	isLoading: false,
};

export const slice = createSlice({
	name: "currentData",
	initialState,
	reducers: {
		setCurrentData: (state, action) => {
			const { payload } = action;
			for (let pKey in payload) {
				let pItem = payload[pKey];
				if (Array.isArray(pItem)) {
					state[pKey] = [...pItem];
				} else {
					state[pKey] = pItem;
				}
			}
		},
	},
});

export const { setCurrentData } = slice.actions;

export default slice.reducer;
