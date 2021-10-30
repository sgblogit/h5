import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import MultipleChoiceGame from "components/MultipleChoiceGame/index";
import "./styles.scss";
import ButtonControlAudio from "components/ButtonControlAudio/index";
import { runRecord } from "helper/appServices";

const Page14 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector((state) => state.app);

	const [buttonShow, setButtonShow] = useState([]);

	const handleSetButtonShow = useCallback((value) => {
		const boolean = value === "c" ? "right" : "wrong";
		setButtonShow((pre) => ({ [value]: boolean }));
	}, []);

	const clickEventName = "page14";

	const clickHandler = (e, op) => {
		onPushAction(e, op?.actionType, op);
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
			className="page14-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center" }
			}
		>
			<ScreenMiddleTitle urlImgTitle={images.page14.titlePage14} />
			<MultipleChoiceGame
				urlQuestion={images.page14.questionPage14}
				answer01={images.page14.bPage14}
				answer02={images.page14.cPage14}
				answer03={images.page14.dPage14}
				answer04={images.page14.ePage14}
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

export default React.memo(Page14);
