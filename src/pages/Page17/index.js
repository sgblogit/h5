import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import images from "assets/images/index";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import MultipleChoiceGame from "components/MultipleChoiceGame/index";
import "./styles.scss";

const Page17 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector((state) => state.app);

	const { playAudio } = audioPlayer;

	const clickEventName = "page17";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {}, [currentRecord]);

	return (
		<div
			className="page17-wrapper"
			style={
				window.innerWidth < window.innerHeight ? { alignItems: "center" } : null
			}
		>
			<ScreenMiddleTitle urlImgTitle={images.page17.titlePage17} />
			<MultipleChoiceGame
				urlQuestion={images.page17.questionPage17}
				answer01={images.page17.dPage17}
				answer02={images.page17.bPage17}
				answer03={images.page17.jPage17}
				answer04={images.page17.ePage17}
				clickHandler={clickHandler}
			/>
		</div>
	);
};

export default React.memo(Page17);
