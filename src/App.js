import React, { useEffect } from "react";
import { setCurrentData } from "redux/currentData";
import { useDispatch } from "react-redux";
import store from "redux/store";
import Aos from "aos";
import Pages from "pages";
import { PAGE_DATA } from "constants/app";
import audioPlayer from "helper/audioPlayer";
import DebugPanel, {
	debugRequestChangePage,
	debugPushRecord,
} from "components/DebugPanel/index";

import "aos/dist/aos.css";
import "./App.scss";

const App = () => {
	const dispatch = useDispatch();

	const handleClick = (e, actionType, value, callback) => {
		console.log("click-fireEvent");

		switch (actionType) {
			case "changePage":
				let { page, step } = value.eventData;
				//just for debug
				debugRequestChangePage(page, step);

				window.bridge.requestChangePage(page, step);
				break;

			case "fireEvent":
				const state = store.getState();
				const { currentPage, currentStep } = state.app;

				//just for debug
				debugPushRecord(value);

				window.bridge.pushRecord({
					eventPage: currentPage,
					eventPageStep: currentStep,
					eventTime: new Date().getTime(),
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
			/**
			 *
			 * @param {*} page trang cần chuyển đến
			 * @param {*} step bước chuyển đến
			 * @returns
			 */
			onPageChange: (page, step) => {
				return new Promise((resolve) => {
					//dừng toàn bộ audio
					audioPlayer.cleanAllAudio();
					dispatch(
						setCurrentData({
							currentPage: page,
							currentStep: step,
						})
					);
					// resolve số bước của trang cần chuyển đến
					resolve(PAGE_DATA[page].length);
				});
			},
			onRecordChange: (record, prevRecord) => {
				console.log(`onRecordChange-record =====>:`, record);
				console.log(`onRecordChange-prevRecord=====>:`, prevRecord);
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="App">
			<DebugPanel />
			<div className="pageWrap">
				<Pages onPushAction={handleClick} />
			</div>
		</div>
	);
};

export default React.memo(App);
