import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import "./styles.scss";
import images from "assets/images/index";
import { runRecord } from "helper/appServices";
import Minigame from "components/Minigame/index";

const Page13 = (props) => {
	const { onPushAction } = props;
	const { currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page39";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
			
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page39">
				<Minigame
					page="page39"
					imgGame={images.page39.textPage39}
					clickHandler={clickHandler}
					audio1="audioPage39"
				/>
		</div>
	);
};

export default React.memo(Page13);
