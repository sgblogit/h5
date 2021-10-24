let audios = {};
let currentAudio = null;
/**
 * pause Audio
 * @param {*} audioId [audioId | audioUrl]
 */
const pauseAudio = (audioId) => {
	if (audios[audioId]) {
		audios[audioId].pause();
	} else {
		if (audios[window.btoa(audioId)]) {
			audios[window.btoa(audioId)].pause();
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
		audios[audioId].play();
	} else {
		const audio = new Audio(audioUrl);
		currentAudio = audio;
		audios[audioId] = audio;
		audio.play();
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
