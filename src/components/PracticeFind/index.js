import React, { useState } from "react";

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
	} = props;

	const [image1, setImage1] = useState(object1);
	const [image2, setImage2] = useState(object2);
	return (
		<div className="session-main">
			<TitleMeeting bgTitle={images.page17.meet17} />
			<div className="session-main-list">
				<div className=" list-item list-img">
					<div className="imga imgTeacher">
						<img
							src={image1}
							onClick={(e) => {
								setImage1(objectG1);
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
					{text1 && (
						<div className="text textTeacher">
							<img src={text1} alt=""></img>
						</div>
					)}
				</div>

				<div className="Ball">
					<img src={ball} alt=" "></img>
				</div>

				<div className=" list-item list-img">
					<div className="text textKid">
						{text2 && <img src={text2} alt=""></img>}
					</div>
					<div className="imga imgKid">
						<img
							src={image2}
							alt=""
							onClick={(e) => {
								setImage2(objectG2);
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
		</div>
	);
}

export default PracticeFind;
