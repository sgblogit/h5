import { createSlice } from "@reduxjs/toolkit";
import images from "assets/images/index";

const initialState = {
	currentPage: 0,
	currentStep: 0,
	currentRecord: [],
	prevRecord: [],

	isLoading: false,
	isShowAnswer: false,
	isPlayRecord: false,
	urlBackground: images.background[0],
	isAudioEndOrPause: false,
	isShowNextIcon: false,
	page10: {
		locationX: "52%",
		locationY: "-6%",
	},
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
		configPage10: (state, action) => {
			const { locationX, locationY } = action.payload;
			state.page10.locationX = locationX;
			state.page10.locationY = locationY;
		},
	},
});

export const { setCurrentData, configPage10 } = slice.actions;

export default slice.reducer;
