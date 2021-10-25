import React, { useState } from "react";

import images from "assets/images/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";

Minigame.propTypes = {};

function Minigame(props) {
	const {
		object1,
		object2,
		clickHandler,
		objectG1,
		audio1,
		audio2,
		audio3,
		audio4,
		audio5,
		audio6,
		page,
		congrats1,
		congrats2,
		congrats3,
		congrats4,
		congrats5,
		audiowin,
		textT1,
		textT2,
		textT3,
		textT4,
		textT5,
		textT6,
	} = props;

	return (
		<div className="session20-main">
			<TitleMeeting bgTitle={images.page26.minigame26} />
			<img
				src={congrats1}
				alt=""
				className={` full hide ${textT2 ? textT2 : ""} `}
			/>
			<img
				src={congrats2}
				alt=""
				className={` full hide ${textT3 ? textT3 : ""} `}
			/>
			<img
				src={congrats3}
				alt=""
				className={` full hide ${textT4 ? textT4 : ""} `}
			/>
			<img
				src={congrats4}
				alt=""
				className={` full hide ${textT5 ? textT5 : ""} `}
			/>
			<img
				src={congrats5}
				alt=""
				className={` full hide ${textT6 ? textT6 : ""} `}
			/>
			<img src={images.page26.what26} className="what" alt="" />

			<img
				src={object1}
				className="box1"
				alt=""
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: page,
						eventData: {
							playAudio: audiowin,
							active: true,
							objectG1: objectG1,
							imageT2: object2,
							textT1: "activehide",
						},
					});
				}}
			/>
			<div className={` hide ${textT1 ? textT1 : ""} `}>
				<img
					src={images.page26.A26}
					className="img1"
					alt=""
					onClick={(e) => {
						clickHandler(e, {
							actionType: "fireEvent",
							eventName: page,
							eventData: {
								playAudio: audio1,
								active: true,
								textT2: "activehide",
							},
						});
					}}
				/>
				<img
					src={images.page26.apple26}
					className="img2 left"
					alt=""
					onClick={(e) => {
						clickHandler(e, {
							actionType: "fireEvent",
							eventName: page,
							eventData: {
								playAudio: audio2,
								active: true,
								textT3: "activehide",
							},
						});
					}}
				/>
				<img
					src={images.page26.ball26}
					className="img2 right"
					alt=""
					onClick={(e) => {
						clickHandler(e, {
							actionType: "fireEvent",
							eventName: page,
							eventData: {
								playAudio: audio3,
								active: true,
								textT4: "activehide",
							},
						});
					}}
				/>
				<img
					src={images.page26.cat26}
					className="img3 left"
					alt=""
					onClick={(e) => {
						clickHandler(e, {
							actionType: "fireEvent",
							eventName: page,
							eventData: {
								playAudio: audio4,
								active: true,
								textT5: "activehide",
							},
						});
					}}
				/>
				<img
					src={images.page26.bear26}
					className="img3 right"
					alt=""
					onClick={(e) => {
						clickHandler(e, {
							actionType: "fireEvent",
							eventName: page,
							eventData: {
								playAudio: audio5,
								active: true,
								textT6: "activehide",
							},
						});
					}}
				/>
				<img
					src={images.page26.two26}
					className="img4"
					alt=""
					onClick={(e) => {
						clickHandler(e, {
							actionType: "fireEvent",
							eventName: page,
							eventData: {
								playAudio: audio6,
								active: true,
								textT2: "activehide",
							},
						});
					}}
				/>
			</div>
		</div>
	);
}

export default Minigame;
