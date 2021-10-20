import { configureStore } from "@reduxjs/toolkit";
import currentData from "redux/currentData";

const store = configureStore({
	reducer: {
		app:currentData
	},
});

export default store;
