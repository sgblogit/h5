import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page15 = (props) => {
	const { onPushAction } = props;
	const [image1, setImage1] = useState(images.common.leftKid);
	const [image, setImage] = useState(images.common.rightTeacher);
	const [activeBox, setActiveBox] = useState("");
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page1";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName
			) {
				if (recordEventData.eventData.playAudio) {
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
				if (recordEventData.eventData.leftKidGif) {
					setImage1(recordEventData.eventData.leftKidGif);
				}
				if (recordEventData.eventData.activeBox) {
					setActiveBox(recordEventData.eventData.activeBox);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page15">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page15",
						eventData: {
							page: 1,
							step: 0,
						},
					});
				}}
			>
				go to page 1
			</button>
			<div className="page15-wrapper">
				<TitleMeeting bgTitle={images.common.redMeeting} />

				<div className="session-main15">
					<div
						className={`session-title hidden ${activeBox ? activeBox : ""}  `}
					>
						<img src={images.page15.Correct} alt=""></img>
					</div>
					<div className="session-main-list15">
						<div className=" list-item15 list-img">
							<img
								src={image1}
								alt=""
								onClick={(e) => {
									clickHandler(e, {
										actionType: "fireEvent",
										eventName: "page15",
										eventData: {
											leftKidGif: images.common.leftKidGif,
										},
									});
								}}
							></img>
						</div>
						<div
							className={`list-item15 main-content15 hidden  ${
								activeBox ? activeBox : ""
							}  `}
						>
							<div className="item">
								<img
									src={images.page15.Yes}
									alt=""
									onClick={(e) => {
										clickHandler(e, {
											actionType: "fireEvent",
											eventName: "page1",
											eventData: {
												playAudio: "yes15",
												active: true,
											},
										});
									}}
								></img>
							</div>

							<div className="item">
								<img src={images.page15.No} alt=""></img>
							</div>
						</div>
						<div className=" list-item15 list-img">
							<img
								src={image}
								alt=""
								onClick={(e) => {
									clickHandler(e, {
										actionType: "fireEvent",
										eventName: "page1",
										eventData: {
											playAudio: "correct15",
											active: true,
											rightTeacherGif: images.common.rightTeacherGif,
											activeBox: "active",
										},
									});
								}}
							></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page15);
