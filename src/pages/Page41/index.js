import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import MinigameQuestion from "components/MinigameQuestion/index";
import { runRecord } from "helper/appServices";

const Page41 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page41";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.page41.blue41);
	const [image2, setImage2] = useState(images.page41.pink41);
	const [image3, setImage3] = useState(images.page41.red41);
	const [image4, setImage4] = useState(images.page41.black41);
	const [textT1, setTextT1] = useState(false);
	const [textT2, setTextT2] = useState(false);
	const [textT3, setTextT3] = useState(false);
	const [textT4, setTextT4] = useState(false);
	const check = [false,true,false,false];

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				imageG1: setImage1,
				imageG2: setImage2,
				imageG3: setImage3,
				imageG4: setImage4,
				textT1: setTextT1,
				textT2: setTextT2,
				textT3: setTextT3,
				textT4: setTextT4,
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page41">
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page41.title41} />
				<MinigameQuestion
					page="page41"
					image1={image1}
					image2={image2}
					image3={image3}
					image4={image4}
					text1={textT1}
					text2={textT2}
					text3={textT3}
					text4={textT4}
					yes={images.page41.yes41}
					no={images.page41.no41}
					kid={images.page41.kid41}
					question={images.page41.question41}
					check = {check}
					buttonAudio={images.page41.button41}
					audioTrue="trueAudio"
					audioFalse="falseAudio"
					audioBackground="backgroundGame"
					currentPage={currentPage}
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page41);
