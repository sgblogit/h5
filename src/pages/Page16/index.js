import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import images from "assets/images/index";

import "./styles.scss";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import MultipleChoiceGame from "components/MultipleChoiceGame/index";

const Page16 = (props) => {
	const { onPushAction } = props;
	const { currentRecord } = useSelector((state) => state.app);

	const { playAudio } = audioPlayer;

	const clickEventName = "page16";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {}, [currentRecord]);

	return (
		<div
			className="page16-wrapper"
			style={
				window.innerWidth < window.innerHeight ? { alignItems: "center" } : null
			}
		>
			<ScreenMiddleTitle urlImgTitle={images.page16.titlePage16} />
			<MultipleChoiceGame
				urlQuestion={images.page16.questionPage16}
				answer01={images.page16.dPage16}
				answer02={images.page16.bPage16}
				answer03={images.page16.jPage16}
				answer04={images.page16.ePage16}
				clickHandler={clickHandler}
			/>
		</div>
	);
};

export default React.memo(Page16);
