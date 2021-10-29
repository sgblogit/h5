import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import MinigameQuestion from "components/MinigameQuestion/index";
import { runRecord } from "helper/appServices";

const Page42 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page42";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.page42.cake42);
	const [image2, setImage2] = useState(images.page42.mod42);
	const [image3, setImage3] = useState(images.page42.egg42);
	const [image4, setImage4] = useState(images.page42.candy42);
	const [textT1, setTextT1] = useState(false);
	const [textT2, setTextT2] = useState(false);
	const [textT3, setTextT3] = useState(false);
	const [textT4, setTextT4] = useState(false);
	const check = [false,false,true,false];

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
		<div className="page42">
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page42.title42} />
				<MinigameQuestion
					page="page42"
					image1={image1}
					image2={image2}
					image3={image3}
					image4={image4}
					text1={textT1}
					text2={textT2}
					text3={textT3}
					text4={textT4}
					yes={images.page42.yes42}
					no={images.page42.no42}
					kid={images.page42.kid42}
					question={images.page42.question42}
					check = {check}
					buttonAudio={images.page42.button42}
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

export default React.memo(Page42);
