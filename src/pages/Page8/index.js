import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import MettingClickRollback from "components/MettingClickRollback/index";
import { runRecord } from "helper/appServices";

const Page8 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page8";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.page8.kid8_1);
	const [image2, setImage2] = useState(images.page8.kid8_2);
	const [image3, setImage3] = useState(images.page8.kid8_3);
	const [image4, setImage4] = useState(images.page8.kid8_4);

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page8">
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page8.title8} />
				<MettingClickRollback
					page="page8"
					image2={image2}
					image1={image1}
					image3={image3}
					image4={image4}
					nextImage={images.page8.next8}
					currentPage={currentPage}
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page8);
