import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import MultipleChoiceGame from "components/MultipleChoiceGame/index";
import "./styles.scss";

const Page14 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector((state) => state.app);

	const clickEventName = "page14";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {}, [currentRecord]);

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
			/>
		</div>
	);
};

export default React.memo(Page14);
