import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import "./styles.scss";
import ButtonControlAudio from "components/ButtonControlAudio/index";

const Page18 = (props) => {
	const { onPushAction } = props;
	const { currentRecord } = useSelector((state) => state.app);

	const clickEventName = "page18";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {}, [currentRecord]);

	return (
		<div className="page18-wrapper">
			<div className="img">
				<img src={images.page18.imagePage18} alt="" />
			</div>
			<ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"bgAudio15"}
				urlButtonPlay={images.common.play}
				urlButtonPause={images.common.Pauses}
			/>
		</div>
	);
};

export default React.memo(Page18);
