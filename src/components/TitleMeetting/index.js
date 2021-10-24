import React from "react";
import "./styles.scss";
function TitleMeeting(props) {
	const { bgTitle } = props;
	return (
		<div className="title-meetting">
			<img src={bgTitle} className="" alt="" />
		</div>
	);
}

export default TitleMeeting;
