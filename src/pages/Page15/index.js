import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import { useSelector } from "react-redux";
import "./styles.scss";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import MultipleChoiceGame from "components/MultipleChoiceGame/index";

const Page15 = (props) => {
	const { onPushAction } = props;
	const { currentRecord } = useSelector((state) => state.app);
	const clickEventName = "page1";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {}, [currentRecord]);

	return (
		<div
			className="page15-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center" }
			}
		>
			<ScreenMiddleTitle urlImgTitle={images.page15.titlePage15} />
			<MultipleChoiceGame
				urlQuestion={images.page15.questionPage15}
				answer01={images.page15.dPage15}
				answer02={images.page15.mPage15}
				answer03={images.page15.cPage15}
				answer04={images.page15.ePage15}
				clickHandler={clickHandler}
			/>
		</div>
	);
};

export default React.memo(Page15);
