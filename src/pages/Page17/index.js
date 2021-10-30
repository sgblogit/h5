import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import MultipleChoiceGame from "components/MultipleChoiceGame/index";
import "./styles.scss";
import { runRecord } from "helper/appServices";
import ButtonControlAudio from "components/ButtonControlAudio/index";

const Page17 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector((state) => state.app);

	const [buttonShow, setButtonShow] = useState([]);

	const handleSetButtonShow = useCallback((value) => {
		const boolean = value === "d" ? "right" : "wrong";
		setButtonShow((pre) => ({ [value]: boolean }));
	}, []);

	const clickEventName = "page17";

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
			className="page17-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center" }
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
				clickEventName={clickEventName}
				buttonShow={buttonShow}
				isAnswerD
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

export default React.memo(Page17);
