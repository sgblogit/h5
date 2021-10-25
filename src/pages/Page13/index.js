import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page13 = (props) => {
	const { onPushAction } = props;
	const [show, setShow] = useState("");
	const [show1, setShow1] = useState("");
	const [show2, setShow2] = useState("");

	const [kid, setKid] = useState(images.common.leftKid);
	const [teacher, setTeacher] = useState(images.common.rightTeacher);

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
		<div className="page13">
			{/* <h1>this is page {currentPage}</h1>
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
			</button> */}
			<div className="page13-wrapper">
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
											playAudio: "cover1",
											active: true,
											step: 0,
											teacher2: images.common.rightTeacherGif,
											show: "show",
										},
									});
								}}
							></img>
						</div>
						<div className="list-item121 main-content12 hidden">
							<div className={`item hidden ${show ? show : ""}`}>
								<img
									src={images.page13.cover1}
									alt=""
									onClick={(e) => {
										clickHandler(e, {
											actionType: "fireEvent",
											eventName: "page12",
											eventData: {
												playAudio: "cover2",
												active: true,
												step: 1,
												show1: "show",
											},
										});
									}}
								></img>
							</div>

							<div className={`item hidden ${show1 ? show1 : ""}`}>
								<img src={images.page13.cover2} alt=""></img>
							</div>
						</div>
						<div
							className={`list-item12 list-iKid hidden ${show2 ? show2 : ""}`}
						>
							<img src={images.page13.cover3} alt=""></img>
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
											playAudio: "cover3",
											active: true,
											step: 2,
											show2: "show",
											kid2: images.common.leftKidGif,
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

export default React.memo(Page13);
