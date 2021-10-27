let audios = {};
let currentAudio = null;
/**
 * pause Audio
 * @param {*} audioId [audioId | audioUrl]
 */
const pauseAudio = (audioId) => {
	const promisePauseAudio = currentAudio?.pause();
	promisePauseAudio
		?.then(() => {
			currentAudio?.pause();
		})
		.catch((err) => console.log(err, "====> Pause audio err <====="));
	if (audios[audioId]) {
		const promisePauseAudio = audios[audioId].pause();
		promisePauseAudio
			?.then(() => {
				audios[audioId].pause();
			})
			.catch((err) => console.log(err, "====> Pause audio err <====="));
	} else {
		if (audios[window.btoa(audioId)]) {
			const promisePauseAudio = audios[window.btoa(audioId)].pause();
			promisePauseAudio
				?.then(() => {
					audios[audioId].pause();
				})
				.catch((err) => console.log(err, "====> Pause audio err <====="));
		}
	}
};

/**
 * pause all audios
 */
const pauseAllAudio = () => {
	for (let aKey in audios) {
		audios[aKey].pause();
	}
};

/**
 * play audio and set current audio
 * @param {*} audioUrl
 * @returns
 */
const playAudio = (audioUrl) => {
	let audioId = window.btoa(audioUrl);
	if (audios[audioId]) {
		const promisePlayAudio = audios[audioId].play();
		promisePlayAudio
			.then((res) => {
				audios[audioId].play();
			})
			.catch((err) => console.log(err, "====> Play audio err <====="));
	} else {
		const audio = new Audio(audioUrl);
		currentAudio = audio;
		audios[audioId] = audio;
		const promisePlayAudio = audio.play();
		promisePlayAudio
			.then((res) => {
				audio.play();
			})
			.catch((err) => console.log(err, "====> Play audio err <====="));
	}
	return audioId;
};

/**
 * clean all audios
 */
const cleanAllAudio = () => {
	pauseAudio();
	audios = {};
};

/**
 * get the last playing audio id
 * @returns currentAudioId
 */
const getCurrentPlayingAudio = () => {
	return currentAudio;
};

const audioPlayer = {
	playAudio,
	pauseAudio,
	pauseAllAudio,
	cleanAllAudio,
	getCurrentPlayingAudio,
};

export default audioPlayer;
