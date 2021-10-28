import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentData } from "redux/currentData";
import "./styles.scss";
import { PAGE_DATA } from "../../constants/app";
import audioPlayer from "../../helper/audioPlayer";
import store from "redux/store";
import audios from "assets/audios/index";

const isDeBug = process.env.NODE_ENV === "development";
const DebugPanel = (props) => {
	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const dispatch = useDispatch();

	const prevPage = () => {
		if (!isDeBug) {
			return false;
		}
		console.log("click-prevPage");
		if (currentPage === 0) {
			return false;
		}
		console.log(`onPageChange-page:`, currentPage - 1);
		console.log(`onPageChange-step:`, 0);
		audioPlayer.cleanAllAudio();
		dispatch(
			setCurrentData({
				currentPage: currentPage - 1,
				currentStep: 0,
				currentRecord: [],
				prevRecord: [],
				isLoading: true,
			})
		);
		audioPlayer.playAudio(audios.audioChangePage);
		setTimeout(() => {
			dispatch(setCurrentData({ isLoading: false }));
			audioPlayer.pauseAudio(audios.audioChangePage);
		}, 1000);
		//window.bridge.requestChangePage(currentPage - 1, 0);
	};

	const nextPage = () => {
		if (!isDeBug) {
			return false;
		}
		if (currentPage === PAGE_DATA.length - 1) {
			return false;
		}
		audioPlayer.cleanAllAudio();
		dispatch(
			setCurrentData({
				currentPage: currentPage + 1,
				currentStep: 0,
				currentRecord: [],
				prevRecord: [],
				isLoading: true,
			})
		);
		audioPlayer.playAudio(audios.audioChangePage);
		setTimeout(() => {
			dispatch(setCurrentData({ isLoading: false }));
			audioPlayer.pauseAudio(audios.audioChangePage);
		}, 1000);
		//window.bridge.requestChangePage(currentPage + 1, 0);
	};

	const prevStep = () => {
		if (!isDeBug) {
			return false;
		}
		console.log("click-prevStep");
		if (currentStep === 0) {
			prevPage();
			return false;
		}
		console.log(`onPageChange-page:`, currentPage);
		console.log(`onPageChange-step:`, currentStep - 1);
		dispatch(
			setCurrentData({
				currentPage: currentPage,
				currentStep: currentStep - 1,
				isShowWarning: false,
				enableClick: true,
				orderClick: 0,
			})
		);

		//window.bridge.requestChangePage(currentPage, currentStep - 1);
	};

	const nextStep = () => {
		if (!isDeBug) {
			return false;
		}
		console.log("click-nextStep");
		if (currentStep === PAGE_DATA[currentPage].length - 1) {
			nextPage();
			return false;
		}
		console.log(`onPageChange-page:`, currentPage);
		console.log(`onPageChange-step:`, currentStep + 1);
		dispatch(
			setCurrentData({
				currentPage: currentPage,
				currentStep: currentStep + 1,
				isShowWarning: false,
				enableClick: true,
				orderClick: 0,
			})
		);
		//window.bridge.requestChangePage(currentPage, currentStep + 1);
	};

	const fireEvent = () => {
		if (!isDeBug) {
			return false;
		}
		console.log("click-fireEvent");

		dispatch(
			setCurrentData({
				currentRecord: [
					...currentRecord,
					{
						actionType: "fireEvent",
						eventName: "eg: from XXXX page",
						eventPage: currentPage,
						eventPageStep: currentStep,
						eventTime: new Date().getTime(),
						eventData: {
							playAudio: "gitAudio",
						},
					},
				],
			})
		);

		//E juset for test
		// window.bridge.pushRecord({
		//     eventPage: currentPage,
		//     eventPageStep: currentStep,
		//     ...value
		// });
	};
	if (isDeBug) {
		return (
			<div
				style={{
					position: "fixed",
					fontSize: 10,
					padding: "5px",
					right: "10px",
					top: "10px",
					zIndex: 1000000,
					backgroundColor: "#dddddd",
				}}
			>
				currentPage:{currentPage}--- currentStep:{currentStep}
				<br />
				currentRecord:{currentRecord.length}--- prevRecord:{prevRecord.length}
				<br />
				<button onClick={prevPage}>prevPage</button>
				<button onClick={nextPage}>nextPage</button>
				<button onClick={prevStep}>prevStep</button>
				<button onClick={nextStep}>nextStep</button>
				<button onClick={fireEvent}>fireEvent</button>
			</div>
		);
	}
	return null;
};

const requestChangePage = (page, step) => {
	if (!isDeBug) {
		return false;
	}

	const state = store.getState();
	const { currentPage, currentRecord } = state.app;

	if (page < 0 || page > PAGE_DATA.length - 1) {
		return;
	}

	if (step < 0 || step > PAGE_DATA[page].length - 1) {
		return;
	}

	console.log(`onPageChange-page:`, page);
	console.log(`onPageChange-step:`, step);
	audioPlayer.cleanAllAudio();
	store.dispatch(
		setCurrentData({
			currentPage: page,
			currentStep: step,
			currentRecord: page === currentPage ? currentRecord : [],
			prevRecord: [],
		})
	);

	return null;
};

const pushRecord = (record) => {
	if (!isDeBug) {
		return false;
	}

	const state = store.getState();
	const { currentRecord, currentPage, currentStep } = state.app;

	store.dispatch(
		setCurrentData({
			currentRecord: [
				...currentRecord,
				{
					eventPage: currentPage,
					eventPageStep: currentStep,
					eventTime: new Date().getTime(),
					...record,
				},
			],
		})
	);
};
export const debugRequestChangePage = requestChangePage;
export const debugPushRecord = pushRecord;

export default React.memo(DebugPanel);
