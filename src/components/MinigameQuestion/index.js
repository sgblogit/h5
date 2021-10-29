import React from "react";

import images from "assets/images/index";
import "./styles.scss";
import { handleClickImage } from "helper/appServices";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentData } from "redux/currentData";
MinigameQuestion.propTypes = {};


function MinigameQuestion(props) {
	const {
		image1,
		image2,
		image3,
		image4,
		kid,
		yes,
		no,
		check,
		text1,
		text2,
		text3,
		text4,
		clickHandler,
		page,
		audioBackground,
		audioTrue,
		audioFalse,
		question,
		buttonAudio,
		currentPage
	} = props;
	const dispatch = useDispatch();
	console.log(text1);
	return (
		<div className="session-main-40">
			<img
						src={kid}
						className="people"
						onClick={(e) => {
							
						}}
						alt=""
					></img>
					<img
						src={question}
						className="people question"
						onClick={(e) => {
							
						}}
						alt=""
					></img>
			<div className="session-main-40-list">
			<img
						src={buttonAudio}
						className="button"
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: page,
										eventData: {
											playAudio: audioBackground,
										},
									},
								},
								0
							);
						}}
						alt=""
						data-id={audioBackground}
					></img>
				<div className=" list-item list-img">
				
					<img
						src={image1}
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: page,
										eventData: {
											active: true,
											textT1: true,
											playAudio: check[0] ? audioTrue : audioFalse,
										},
									},
								},
								0
							);
							console.log(text1);
						}}
						
					></img>
					<img src={check[0] ? yes : no} className={`check  ${text1==true ? "index" : "none"} `}></img>
				</div>
				
				<div className=" list-item list-img">
				<img
						src={image2}
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: page,
										eventData: {
											active: true,
											textT2: true,
											playAudio: check[1] ? audioTrue : audioFalse,
										},
									},
								},
								0
							);
						}}
					></img>
					<img src={check[1] ? yes : no} className={`check  ${text2==true ? "index" : "none"} `}></img>
				</div>
				<div className=" list-item list-img">
				<img
						src={image3}
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: page,
										eventData: {
											active: true,
											textT3: true,
											playAudio: check[2] ? audioTrue : audioFalse,
										},
									},
								},
								0
							);
						}}
					></img>
					<img src={check[2] ? yes : no} className={`check  ${text3==true ? "index" : "none"} `}></img>
				</div>
				<div className=" list-item list-img">
				<img
						src={image4}
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: page,
										eventData: {
											active: true,
											textT4: true,
											playAudio: check[3] ? audioTrue : audioFalse,
										},
									},
								},
								0
							);
						}}
					></img>
					<img src={check[3] ? yes : no} className={`check  ${text4==true ? "index" : "none"} `}></img>
				</div>
				
				
			</div>
			
		</div>
	);
}

export default MinigameQuestion;
