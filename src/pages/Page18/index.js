import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import "./styles.scss";

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
		</div>
	);
};

export default React.memo(Page18);
