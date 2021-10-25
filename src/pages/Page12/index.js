import React, { useEffect, useRef, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page12 = (props) => {
	const { onPushAction } = props;
	const [show, setShow] = useState("");
	const [show1, setShow1] = useState("");
	const [show2, setShow2] = useState("");

	const [kid, setKid] = useState(images.common.rightKid);
	const [teacher, setTeacher] = useState(images.common.leftTeacher);

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

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
				if (recordEventData.eventData.playAudio) {
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
				if (recordEventData.eventData.teacher2) {
					setTeacher(recordEventData.eventData.teacher2);
				}
				if (recordEventData.eventData.show) {
					setShow(recordEventData.eventData.show);
				}
				if (recordEventData.eventData.show1) {
					setShow1(recordEventData.eventData.show1);
				}
				if (recordEventData.eventData.show2) {
					setShow2(recordEventData.eventData.show2);
				}
				if (recordEventData.eventData.kid2) {
					setKid(recordEventData.eventData.kid2);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

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
									clickHandler(e, {
										actionType: "fireEvent",
										eventName: "page12",
										eventData: {
											playAudio: "conver1",
											active: true,
											step: 0,
											teacher2: images.common.leftTeacherGif,
											show: "show",
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
										clickHandler(e, {
											actionType: "fireEvent",
											eventName: "page12",
											eventData: {
												playAudio: "conver2",
												active: true,
												step: 1,
												show1: "show",
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
									clickHandler(e, {
										actionType: "fireEvent",
										eventName: "page12",
										eventData: {
											playAudio: "conver3",
											active: true,
											step: 2,
											show2: "show",
											kid2: images.common.rightKidGif,
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
