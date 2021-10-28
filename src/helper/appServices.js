import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import store from "redux/store";
import { setCurrentData } from "redux/currentData";
export const runRecord = (params) => {
	const state = store.getState();
	const result = [];
	const { currentPage, currentStep, currentRecord } = state.app;
	const { eventName, callbacks } = params;
	const { playAudio } = audioPlayer;
	if (currentRecord?.length > 0) {
		let recordEventData = currentRecord[currentRecord.length - 1];
		if (
			recordEventData?.eventPage === currentPage &&
			recordEventData?.eventPageStep === currentStep &&
			recordEventData?.eventName === eventName
		) {
			if (recordEventData.eventData.playAudio) {
				let audioUrl = audios[recordEventData.eventData.playAudio];
				playAudio(audioUrl);
			}
			for (const k in recordEventData.eventData) {
				result.push(k);
				if (params.callbacks) {
					const callback = callbacks[k];
					if (callback && typeof callback === "function") {
						callback(recordEventData.eventData[k]);
					}
				}
			}
		}
	}
	return result;
};

export const handleClickImage = (callback, params, order) => {
	const state = store.getState();
	const { orderClick, isShowWarning } = state.app;
	if (order <= orderClick) {
		callback(params.event, params.data);
		if (isShowWarning) {
			store.dispatch(setCurrentData({ isShowWarning: false }));
		}
		store.dispatch(setCurrentData({ orderClick: orderClick + 1 }));
	} else {
		store.dispatch(setCurrentData({ isShowWarning: true }));
	}
};
