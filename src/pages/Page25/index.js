import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page25 = (props) => {
	const { onPushAction } = props;

	const [show1, setShow1] = useState("");
	const [show2, setShow2] = useState("");

	const [kid, setKid] = useState(images.common.leftKid);
	const [teacher, setTeacher] = useState(images.common.rightTeacher);

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page25";

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
				if (recordEventData.eventData.playAudio) {
					//playAudio
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
				if (recordEventData.eventData.show1) {
					setTimeout(() => {
                        setShow1(recordEventData.eventData.show1);
                    }, 1500);
					
				}
                if (recordEventData.eventData.show2) {
					setShow2(recordEventData.eventData.show2);
				}
			}
		}
	}, [currentRecord]);
	console.log("render page25");
	return (
		<div className="page25">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page25",
						eventData: {
							page: 1,
							step: 0,
						},
					});
				}}
			>
				go to page 1
			</button>
			<div className="page25-wrapper">
				<TitleMeeting bgTitle={images.common.redMeeting} />

				<div className="session-main25">
					<div className={`session-title hidden ${show1 ? show1 : ""}  `}>
						<div className="item">
							<img src={images.page25.picture2} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page25.picture3} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page25.picture4} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page25.picture5} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page25.picture6} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page25.picture7} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page25.picture8} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page25.picture9} alt=""></img>
						</div>
						<div className="item">
<img src={images.page25.picture10} alt=""></img>
						</div>
					</div>
					<div className="session-main-list25">
						<div className=" list-item25 list-img">
							<img
								src={kid}
								alt=""
								onClick={(e) => {
									setKid(images.common.leftKidGif);
								}}
							></img>
						</div>
						<div
							className={`list-item25 main-content25 hidden  ${
								show2 ? show2 : ""
							}  `}
						>
							<div className="item">
								<img src={images.page25.picture1} alt=""></img>
							</div>
						</div>
						<div className=" list-item25 list-imgTeacher">
							<img
								src={teacher}
								alt=""
								onClick={(e) => {
									setTeacher(images.common.rightTeacherGif);
									clickHandler(e, {
										actionType: "fireEvent",
										eventName: "page25",
										eventData: {
											playAudio: "voice25",
											active: true,
											show2 : 'active',
                                        	show1 : 'active'
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

export default React.memo(Page25);