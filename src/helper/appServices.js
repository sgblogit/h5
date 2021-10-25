import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
export const runRecord = (pageInfo = {}, params = {}) => {
	const { currentPage, currentStep, currentRecord } = pageInfo;
	const { playAudio, pauseAudio } = audioPlayer;
	if (currentRecord.length > 0) {
		let recordEventData = currentRecord[currentRecord.length - 1];
		if (
			recordEventData.eventPage === currentPage &&
			recordEventData.eventPageStep === currentStep &&
			recordEventData.eventName === params.clickEventName
		) {
			switch (currentPage) {
				case 0:
					break;
				default:
					if (recordEventData.eventData.playAudio) {
						//playAudio
						let audioUrl = audios[recordEventData.eventData.playAudio];
						playAudio(audioUrl);
					} else {
						pauseAudio();
					}
					break;
			}
		}
	}
};
