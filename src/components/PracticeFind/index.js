import React from "react";

import images from "assets/images/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";

PracticeFind.propTypes = {};
function PracticeFind(props) {
	const {
		object1,
		ball,
		object2,
		text1,
		text2,
		clickHandler,
		objectG1,
		objectG2,
		audio1,
		audio2,
		page,
		textKid14,
		textTeacher14,
		reverseObj,
		ballX,
		textT1,
		textT2,
	} = props;

	return (
		<div className="session17-main">
			<TitleMeeting bgTitle={images.common.redMeeting} />
			<div className={` session17-main-list ${reverseObj ? reverseObj : ""} `}>
				<div className="teacher">
					<img
						className="imgTeacher"
						src={object1}
						onClick={(e) => {
							clickHandler(e, {
								actionType: "fireEvent",
								eventName: page,
								eventData: {
									playAudio: audio1,
									active: true,
									imageG1: objectG1,
									textT1: "active",
								},
							});
						}}
						alt=""
					></img>

					{text1 && (
						<div
							className={`textTeacher ${textTeacher14 ? textTeacher14 : ""}  ${
								textT1 ? textT1 : ""
							}  `}
						>
							<img src={text1} alt=""></img>
						</div>
					)}
				</div>

				<div className={`ball ${ballX ? ballX : ""} `}>
					<img src={ball} alt=" "></img>
				</div>

				<div className="kid">
					<div
						className={`textKid ${textKid14 ? textKid14 : ""}  ${
							textT2 ? textT2 : ""
						}  `}
					>
						{text2 && <img src={text2} alt=""></img>}
					</div>
					<div className="imgKid">
						<img
							src={object2}
							alt=""
							onClick={(e) => {
								clickHandler(e, {
									actionType: "fireEvent",
									eventName: page,
									eventData: {
										playAudio: audio2,
										active: true,
										imageG2: objectG2,
										textT2: "active",
									},
								});
							}}
						></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PracticeFind;
