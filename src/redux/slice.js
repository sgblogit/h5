import { createSlice } from "@reduxjs/toolkit";
import images from "assets/images/index";

const initialState = {
	isLoading: false,
	isShowAnswer: false,
	isPlayRecord: false,
	currentPage: 10,
	currentStep: 0,
	urlBackground: images.background[10],
	isAudioEndOrPause: false,
	isShowNextIcon: false,
	page10: {
		locationX: "52%",
		locationY: "-6%",
	},
};

export const slice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			const { payload } = action;
			state.currentPage = payload;
		},
		setCurrentStep: (state, action) => {
			const { payload } = action;
			state.currentStep = payload;
		},
		setUrlBackground: (state, action) => {
			const { payload } = action;
			state.urlBackground = payload;
		},
		setIsLoading: (state, action) => {
			const { payload } = action;
			state.isLoading = payload;
		},
		setIsShowAnswer: (state, action) => {
			const { payload } = action;
			state.isShowAnswer = payload;
		},
		setIsPlayRecord: (state, action) => {
			const { payload } = action;
			state.isPlayRecord = payload;
		},
		setIsAudioEndOrPause: (state, action) => {
			const { payload } = action;
			state.isAudioEndOrPause = payload;
		},
		setIsShowNextIcon: (state, action) => {
			const { payload } = action;
			state.isShowNextIcon = payload;
		},
		configPage10: (state, action) => {
			const { locationX, locationY } = action.payload;
			state.page10.locationX = locationX;
			state.page10.locationY = locationY;
		},

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

export const {
	setIsLoading,
	setIsShowAnswer,
	setIsPlayRecord,
	setCurrentPage,
	setCurrentStep,
	setUrlBackground,
	setIsAudioEndOrPause,
	setIsShowNextIcon,
	configPage10,
	setCurrentData,
} = slice.actions;

export default slice.reducer;
