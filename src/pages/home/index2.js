/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import images from "assets/images/index";
import "./styles.scss";
import CursorContainer from "components/CursorContainer/index";
import ButtonBackgroundMusic from "components/ButtonBackgroundMusic/index";

import BackAndNextPage from "components/BackAndNextPage";
import { useSelector } from "react-redux";

const Home = (props) => {
	const { onPushAction, sing, kids, icon } = props;

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const imgClickEventName = "homeeee";

	const imgClickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	return (
		<div className="back-to-school">
			<CursorContainer
				animation="scale"
				onClick={(e) => {
					imgClickHandler(e, {
						actionType: "changePage",
						eventName: imgClickEventName,
						eventData: {
							page: 1,
							step: 0,
						},
					});
				}}
				actionType="change_page"
				value={currentPage + 1}
			>
				<img
					src={images.common.unit2}
					alt={images.common.unit2}
					className="image-start-unit"
				/>
			</CursorContainer>
			<BackAndNextPage
				isDisablePrevIcon
				currentPage={currentPage}
				onClickChangePage={(e) => {
					imgClickHandler(e, {
						actionType: "changePage",
						eventName: imgClickEventName,
						eventData: {
							page: 1,
							step: 0,
						},
					});
				}}
			/>
			<ButtonBackgroundMusic
				audioName={"audioBg"}
				onPushAction={onPushAction}
				autoPlay={true}
				// audioPlaying={
				// 	window.currentAudio ||
				// 	window.bridge?._prevRecordStack?.[
				// 		window.bridge._prevRecordStack.length - 1
				// 	]
				// }
				// handleClickPause={handleClickPause}
				// handleClickPlay={handleClickPlay}
				// isShowPlayButton={isShowPlayButton}
			/>
		</div>
	);
};

export default React.memo(Home);
