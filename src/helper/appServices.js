import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import store from "redux/store";
export const runRecord = (params) => {
	const result = [];
	const state = store.getState();
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
