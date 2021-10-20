import React from "react";

let audios = {};
let currentAudio = null;

const pauseAudio = (audioId) => {
	if (audios[audioId]) {
		audios[audioId].pause();
	} else {
		if (audios[window.btoa(audioId)]) {
			audios[window.btoa(audioId)].pause();
		}
	}
};

const pauseAllAudio = () => {
	for (let aKey in audios) {
		audios[aKey].pause();
	}
};

const playAudio = (audioUrl) => {
	let audioId = window.btoa(audioUrl);
	if (audios[audioId]) {
		const PromisePlayAudio = audios[audioId].play();
		PromisePlayAudio.then(() => {
			audios[audioId].play();
		}).catch((err) => {
			console.log("error! Play audio ===> ", err);
		});
	} else {
		const audio = new Audio(audioUrl);
		currentAudio = audio;
		audios[audioId] = audio;
		const PromisePlayAudio = audio.play();
		PromisePlayAudio.then((res) => {
			audios[audioId].play();
		}).catch((err) => {
			console.log("error! Play audio ===> ", err);
		});
	}
	return audioId;
};

const cleanAllAudio = () => {
	pauseAudio();
	audios = {};
};

const getCurrentPlayingAudio = () => {
	return currentAudio;
};

export default {
	playAudio,
	pauseAudio,
	pauseAllAudio,
	cleanAllAudio,
	getCurrentPlayingAudio,
};
