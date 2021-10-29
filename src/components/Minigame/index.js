import { handleClickImage } from "helper/appServices";
import React from "react";
import "./styles.scss";

Minigame.propTypes = {};

function Minigame(props) {
	const {
		imgGame,
		audio1,
		clickHandler,
		page,
	} = props;

	return (
		<div className="mini-game">
			<img
				alt={imgGame}
				src={imgGame}
				onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: page,
										eventData: {
											playAudio: audio1,
											active: true,
								
										},
									},
								},
								0
							);
						}}

			/>
		</div>
	);
}

export default Minigame;
