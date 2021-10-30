import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import images from "assets/images/index";

import "./styles.scss";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import MultipleChoiceGame from "components/MultipleChoiceGame/index";
import { runRecord } from "helper/appServices";
import ButtonControlAudio from "components/ButtonControlAudio/index";

const Page16 = (props) => {
	const { onPushAction } = props;
	const { currentRecord } = useSelector((state) => state.app);

	const [buttonShow, setButtonShow] = useState([]);

	const handleSetButtonShow = useCallback((value) => {
		const boolean = value === "c" ? "right" : "wrong";
		setButtonShow((pre) => ({ [value]: boolean }));
	}, []);

	const clickEventName = "page16-click";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		runRecord({
			eventName: clickEventName,
			callbacks: {
				a: handleSetButtonShow,
				b: handleSetButtonShow,
				c: handleSetButtonShow,
				d: handleSetButtonShow,
			},
		});
	}, [currentRecord, handleSetButtonShow]);

	return (
		<div
			className="page16-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center" }
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
				clickEventName={clickEventName}
				buttonShow={buttonShow}
				isAnswerC
			/>
			<ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"bgAudio15"}
				urlButtonPlay={images.common.play}
				urlButtonPause={images.common.Pauses}
				isLeft
			/>
		</div>
	);
};

export default React.memo(Page16);
