import React, { useEffect, useRef, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page12 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const [activeBox, setActiveBox] = useState("");
	const redBlockRef = useRef();

	const [show, setShow] = useState("");
	const [show1, setShow1] = useState("");
	const [show2, setShow2] = useState("");

	const [kid, setKid] = useState(images.common.rightKid);
	const [teacher, setTeacher] = useState(images.common.leftTeacher);

	const [intro, setIntro] = useState(images.page0.kidStart);
	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = "page12";

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
				console.log(`runRecordEvent`, recordEventData);
				if (recordEventData.eventData.active) {
					setActive("active");
					//setTimeOutAddClass('red-block','active',2000)
				} else {
					setActive("");
				}
				if (recordEventData.eventData.playAudio) {
					//playAudio
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
			}
		}
	}, [currentRecord]);
	console.log("render page0");
	return (
		<div className="page12">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page12",
						eventData: {
							page: 1,
							step: 0,
						},
					});
				}}
			>
				go to page 1
			</button>
			<div className="page12-wrapper">
				<TitleMeeting bgTitle={images.page1.titleMeeting} />

				<div className="session-main12">
					<div className="session-main-list12">
						<div className=" list-item12 list-img">
							<img
								src={teacher}
								alt=""
								onClick={(e) => {
									setTeacher(images.common.leftTeacherGif);
									setShow("show");
									clickHandler(e, {
										actionType: "fireEvent",
										eventName: "page12",
										eventData: {
											playAudio: "conver1",
											active: true,
											step: 0,
										},
									});
								}}
							></img>
						</div>
						<div className="list-item121 main-content12 hidden">
							<div className={`item hidden ${show ? show : ""}`}>
								<img
									src={images.page12.text13}
									alt=""
									onClick={(e) => {
										setShow1("show");
										clickHandler(e, {
											actionType: "fireEvent",
											eventName: "page12",
											eventData: {
												playAudio: "conver2",
												active: true,
												step: 1,
											},
										});
									}}
								></img>
							</div>

							<div className={`item hidden ${show1 ? show1 : ""}`}>
								<img src={images.page12.text131} alt=""></img>
							</div>
						</div>
						<div
							className={`list-item12 list-iKid hidden ${show2 ? show2 : ""}`}
						>
							<img src={images.page12.text132} alt=""></img>
						</div>
						<div className=" list-item12 list-img">
							<img
								src={kid}
								alt=""
								onClick={(e) => {
									setShow2("show");
									setKid(images.common.rightKidGif);
									clickHandler(e, {
										actionType: "fireEvent",
										eventName: "page12",
										eventData: {
											playAudio: "conver3",
											active: true,
											step: 2,
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

export default React.memo(Page12);
