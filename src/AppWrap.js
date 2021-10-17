import React, { useState, useEffect } from "react";
import { setCurrentData } from "redux/currentData";
import { useSelector, useDispatch } from "react-redux";

import Aos from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import "./pages/home/styles.scss";
import Container from "components/Container/index";
import images from "assets/images/index";
import CursorContainer from "components/CursorContainer/index";
import audios from "assets/audios";
import Pages from "pages";
import { PAGE_DATA } from "constants/App";
import audioPlayer from "helper/audioPlayer";

const AppWrap = () => {
	const { currentPage, currentStep, currentRecord, prevRecord, urlBackground } =
		useSelector((state) => state.app);

	const isDeBug = true;

	const dispatch = useDispatch();

	const prevPage = () => {
		console.log("click-prevPage");

		//S just for test
		console.log(`onPageChange-page:`, currentPage - 1);
		console.log(`onPageChange-step:`, 0);
		if (isDeBug) {
			audioPlayer.cleanAllAudio();
			dispatch(
				setCurrentData({
					currentPage: currentPage - 1,
					currentStep: 0,
					currentRecord: [],
					prevRecord: [],
					urlBackground: images.background[currentPage - 1],
				})
			);
		}
		//E juset for test

		window.bridge.requestChangePage(currentPage - 1, 0);
	};

	const nextPage = () => {
		console.log("click-nextPage");

		//S just for test
		console.log(`onPageChange-page:`, currentPage + 1);
		console.log(`onPageChange-step:`, 0);
		if (isDeBug) {
			audioPlayer.cleanAllAudio();
			dispatch(
				setCurrentData({
					currentPage: currentPage + 1,
					currentStep: 0,
					currentRecord: [],
					prevRecord: [],
					urlBackground: images.background[currentPage + 1],
				})
			);
		}
		//E juset for test

		window.bridge.requestChangePage(currentPage + 1, 0);
	};

	const prevStep = () => {
		console.log("click-prevStep");

		//S just for test
		console.log(`onPageChange-page:`, currentPage);
		console.log(`onPageChange-step:`, currentStep - 1);
		if (isDeBug) {
			dispatch(
				setCurrentData({
					currentPage: currentPage,
					currentStep: currentStep - 1,
				})
			);
		}
		//E juset for test

		window.bridge.requestChangePage(currentPage, currentStep - 1);
	};

	const nextStep = () => {
		console.log("click-nextStep");

		//S just for test
		console.log(`onPageChange-page:`, currentPage);
		console.log(`onPageChange-step:`, currentStep + 1);
		if (isDeBug) {
			dispatch(
				setCurrentData({
					currentPage: currentPage,
					currentStep: currentStep + 1,
				})
			);
		}
		//E juset for test

		window.bridge.requestChangePage(currentPage, currentStep + 1);
	};

	/**
     * 
     * @param {*} e 
     * @param {*} actionType [changePage,fireEvent]
     * @param {*} value 
     * changePage value
     * {
            page,
            step
     * }
     * fireEvent value
     * {
            eventName: 'fire',
            eventPage: currentPage,
            eventPageStep: currentStep,
            eventData: {
                eN: 'eN'
            }
        }
     * @param {*} callback 
     * 
     */
	const handleClick = (e, actionType, value, callback) => {
		console.log({ e, actionType, value, callback }, "11111111111111");

		switch (actionType) {
			case "changePage":
				let { page, step } = value.eventData;
				//S just for test
				if (isDeBug) {
					dispatch(
						setCurrentData({
							currentPage: page,
							currentStep: step,
							currentRecord: [],
							prevRecord: [],
						})
					);
				}
				//E juset for test
				window.bridge.requestChangePage(page, step);
				break;

			case "fireEvent":
				//S just for test
				if (isDeBug) {
					dispatch(
						setCurrentData({
							currentRecord: [
								{
									eventPage: currentPage,
									eventPageStep: currentStep,
									...value,
								},
							],
						})
					);
				}
				//E juset for test
				window.bridge.pushRecord({
					eventPage: currentPage,
					eventPageStep: currentStep,
					...value,
				});
				break;
			default:
				break;
		}

		if (typeof callback === "function") {
			callback();
		}
	};

	useEffect(() => {
		Aos.init();
	}, []);

	useEffect(() => {
		window.bridge = window.BJYBridge.getInstance({
			onPageChange: (page, step) => {
				//翻页回调事件，需要先卸载当前页面，然后再去加载指定页面
				//卸载当前页面需要停止所有声音和未执行完的事件
				return new Promise((resolve) => {
					console.log(`onPageChange-page:`, page);
					console.log(`onPageChange-step:`, step);

					//stopAllAudio
					audioPlayer.cleanAllAudio();

					dispatch(
						setCurrentData({
							currentPage: page,
							currentStep: step,
							urlBackground: images.background[page],
						})
					);

					resolve(0);
				});
			},
			onRecordChange: (record, prevRecord) => {
				//页面事件同步，需要判定事件的页面归宿，是否与当前的页面一致，不一致不处理。
				//事件类型
				console.log(`onRecordChange-record =====> :`, record);
				console.log(`onRecordChange-prevRecord: =====> `, prevRecord);
				dispatch(
					setCurrentData({
						currentRecord: record,
						prevRecord: prevRecord,
					})
				);
			},
		});

		new Promise((resolve) => {
			var initData = {
				page: 0,
				step: 0,
			};
			resolve(initData);
		}).then((initData) => {
			const page = initData.page;
			const step = initData.step;
			window.bridge.getReady({
				page: page,
				step: step,
				pageCount: PAGE_DATA.length,
				stepCount: PAGE_DATA[page].length,
			});
		});
	}, []);
	console.log("renderAppWrap");
	return (
		<div className="App">
			<div
				style={{
					position: "fixed",
					fontSize: 10,
					right: "10px",
					top: "10px",
					zIndex: 1000000,
					backgroundColor: "#dddddd",
				}}
			>
				currentPage:{currentPage}
				<br />
				currentStep:{currentStep}
				<br />
				currentRecord:{currentRecord.length}
				<br />
				prevRecord:{prevRecord.length}
				<br />
				<button onClick={prevPage}>prevPage</button>
				<button onClick={nextPage}>nextPage</button>
				<hr />
				<button onClick={prevStep}>prevStep</button>
				<button onClick={nextStep}>nextStep</button>
				<button onClick={handleClick}>fireEvent</button>
			</div>

			<div className="home">
				<Container
					content={
						<Pages
							onPushAction={handleClick}
							currentPage={currentPage}
							audioPlaying={
								window.currentAudio ||
								window.bridge?._prevRecordStack?.[
									window.bridge._prevRecordStack.length - 1
								]
							}
						/>
					}
					urlBackground={urlBackground}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
};

export default AppWrap;
