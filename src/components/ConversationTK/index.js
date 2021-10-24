import React, { useState } from "react";

import images from "assets/images/index";
import "./styles.scss";
ConversationTK.propTypes = {};

function ConversationTK(props) {
	const {
		object1,
		object2,
		text1,
		text2,
		clickHandler,
		objectG1,
		objectG2,
		audio1,
		audio2,
		page,
		reverseObj,
	} = props;

	const [image1, setImage1] = useState(object1);
	const [image2, setImage2] = useState(object2);

	const [textT1, setTextT1] = useState("");
	const [textT2, setTextT2] = useState("");
	return (
		<div className="session-main">
			<div className="session-main-list">
				<div className=" list-item list-img">
					<img
						src={image1}
						onClick={(e) => {
							setImage1(objectG1);
							setTextT1("active");
							clickHandler(e, {
								actionType: "fireEvent",
								eventName: page,
								eventData: {
									playAudio: audio1,
									active: true,
								},
							});
						}}
						alt=""
					></img>
				</div>
				<div
					className={` list-item main-content  ${
						reverseObj ? reverseObj : ""
					} `}
				>
					{text1 && (
						<div className={` text textTeacher  ${textT1 ? textT1 : ""}  `}>
							<img src={text1} alt=""></img>
						</div>
					)}
					<div className={` text textKid  ${textT2 ? textT2 : ""}  `}>
						{text2 && <img src={text2} alt=""></img>}
					</div>
				</div>
				<div className=" list-item list-img">
					<img
						src={image2}
						alt=""
						onClick={(e) => {
							setImage2(objectG2);
							setTextT2("active");
							clickHandler(e, {
								actionType: "fireEvent",
								eventName: page,
								eventData: {
									playAudio: audio2,
									active: true,
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
