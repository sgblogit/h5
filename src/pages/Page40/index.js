import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import MinigameQuestion from "components/MinigameQuestion/index";
import { runRecord } from "helper/appServices";

const Page40 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page40";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.page40.ball40);
	const [image2, setImage2] = useState(images.page40.cat40);
	const [image3, setImage3] = useState(images.page40.doll40);
	const [image4, setImage4] = useState(images.page40.monkey40);
	const [textT1, setTextT1] = useState(false);
	const [textT2, setTextT2] = useState(false);
	const [textT3, setTextT3] = useState(false);
	const [textT4, setTextT4] = useState(false);
	const check = [true,false,false,false];

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
		<div className="page40">
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page40.title40} />
				<MinigameQuestion
					page="page40"
					image1={image1}
					image2={image2}
					image3={image3}
					image4={image4}
					text1={textT1}
					text2={textT2}
					text3={textT3}
					text4={textT4}
					yes={images.page40.yes40}
					no={images.page40.no40}
					kid={images.page40.kid40}
					question={images.page40.question40}
					check = {check}
					buttonAudio={images.page40.button40}
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

export default React.memo(Page40);
