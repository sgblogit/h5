import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import Question from "components/Question/index";
import { runRecord } from "helper/appServices";
import ClassRoom from "components/ClassRoom/index";

const Page6 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page6";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	// const [image1, setImage1] = useState(images.common.leftTeacher);
	// const [image2, setImage2] = useState(images.common.rightKid);
	const [teacherImg1, setImageTeacher] = useState(images.page6.teacherGifPage6);
	const [active, setActive] = useState("");
	// const [textT2, setTextT2] = useState(null);

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				teacherImg: setImageTeacher,
				active: setActive,
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);
	console.log("render page6");
	return (
		<div className="page6">
			{/* <h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page6",
						eventData: {
							page: 2,
							step: 0,
						},
					});
				}}
			>
				go to page 2
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page6",
						eventData: {
							playAudio: "gitAudio",
							active: false,
						},
					});
				}}
			>
				play audio
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page6",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button> */}
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.common.title} />
				<ClassRoom	
					kidImg={images.page4.kidPage4}
					kidText={images.page6.textPage6}
					audioKid="audioPage6"
					page="page6"
					clickHandler={clickHandler}
					active ={active}

				/>
			</div>
		</div>
	);
};

export default React.memo(Page6);
