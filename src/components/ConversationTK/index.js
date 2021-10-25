import React, { useState } from "react";

import images from "assets/images/index";
import "./styles.scss";
ConversationTK.propTypes = {};

function ConversationTK(props) {
	const {
		image1,
		image2,
		text1,
		text2,
		clickHandler,
		audio1,
		audio2,
		page,
		reverse,
		imageG1,
		imageG2,
	} = props;
	return (
		<div className="session-main">
			<div className="session-main-list">
				<div className=" list-item list-img">
					<img
						src={image1}
						onClick={(e) => {
							clickHandler(e, {
								actionType: "fireEvent",
								eventName: page,
								eventData: {
									playAudio: audio1,
									active: true,
									imageG1: imageG1,
									textT1: images.page1.textKid,
								},
							});
						}}
						alt=""
						data-id={audio1}
					></img>
				</div>
				<div className={`list-item main-content  ${reverse ? "reverse" : ""} `}>
					{text1 && (
						<div className={`text textTeacher`}>
							<img src={text1} alt=""></img>
						</div>
					)}
					{text2 && (
						<div className={`text textKid`}>
							<img src={text2} alt="" />
						</div>
					)}
				</div>
				<div className=" list-item list-img">
					<img
						src={image2}
						alt=""
						onClick={(e) => {
							clickHandler(e, {
								actionType: "fireEvent",
								eventName: page,
								eventData: {
									playAudio: audio2,
									active: true,
									imageG2: imageG2,
									textT2: images.page1.textTeacher,
								},
							});
						}}
					></img>
				</div>
			</div>
		</div>
	);
}

export default ConversationTK;
