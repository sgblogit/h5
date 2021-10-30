import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import MyNameKids from "components/MyNameKids/index";
import images from "assets/images/index";
import { runRecord } from "helper/appServices";

const Page10 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page10";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.page10.kid10);
	const [image2, setImage2] = useState(images.page10.name10);
	const [prevImage, setImage3] = useState(images.page10.prev10);
	const [buttonAudio, setImage4] = useState(images.page10.button10);
	

	// const [textT1, setTextT1] = useState(null);
	// const [textT2, setTextT2] = useState(null);

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				imageG1: setImage1,
				imageG2: setImage2,
				imageG3: setImage3,
				imageG4: setImage4,
			},
		});
		console.log(values, "values");
	}, [currentRecord]);
	return (
		<div className="page10">
			<div className="page-wrraper">
				<MyNameKids
					page="page10"
					image2={image2}
					image1={image1}
					currentPage={currentPage}
					prevImage={prevImage}
					buttonAudio={buttonAudio}
					imageG1={images.page10.kidGif10}
					audio="kidAudio10"
					clickEventName = {clickEventName}
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page10);
