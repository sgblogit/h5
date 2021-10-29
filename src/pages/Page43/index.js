import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import MinigameQuestion from "components/MinigameQuestion/index";
import { runRecord } from "helper/appServices";

const Page43 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page43";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.page43.monkey43);
	const [image2, setImage2] = useState(images.page43.dog43);
	const [image3, setImage3] = useState(images.page43.bird43);
	const [image4, setImage4] = useState(images.page43.cat43);
	const [textT1, setTextT1] = useState(false);
	const [textT2, setTextT2] = useState(false);
	const [textT3, setTextT3] = useState(false);
	const [textT4, setTextT4] = useState(false);
	const check = [false,false,false,true];

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
		<div className="page43">
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page43.title43} />
				<MinigameQuestion
					page="page43"
					image1={image1}
					image2={image2}
					image3={image3}
					image4={image4}
					text1={textT1}
					text2={textT2}
					text3={textT3}
					text4={textT4}
					yes={images.page43.yes43}
					no={images.page43.no43}
					kid={images.page43.kid43}
					question={images.page43.question43}
					check = {check}
					buttonAudio={images.page43.button43}
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

export default React.memo(Page43);
