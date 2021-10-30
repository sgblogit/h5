import images from "assets/images/index";
import { handleClickImage } from "helper/appServices";
import React from "react";
import "./styles.scss";

const MultipleChoiceGame = (props) => {
	const {
		urlQuestion,
		answer01,
		answer02,
		answer03,
		answer04,
		clickHandler,
		clickEventName,
		buttonShow,
		isAnswerA,
		isAnswerB,
		isAnswerC,
		isAnswerD,
	} = props;
	return (
		<div className="multipleGame">
			<div className="question">
				<img src={urlQuestion} alt="" />
			</div>
			<div className="answer">
				<div className="answer__item">
					<img
						src={answer01}
						alt=""
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: clickEventName,
										eventData: {
											playAudio: isAnswerA ? "trueAudio" : "falseAudio",
											a: "a",
										},
									},
								},
								0
							);
						}}
					/>
					{buttonShow?.["a"] === "right" ? (
						<div className="answer__result">
							<img src={images.page40.yes40} alt="" />
						</div>
					) : buttonShow?.["a"] === "wrong" ? (
						<div className="answer__result">
							<img src={images.page40.no40} alt="" />
						</div>
					) : null}
				</div>
				<div className="answer__item">
					<img
						src={answer02}
						alt=""
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: clickEventName,
										eventData: {
											playAudio: isAnswerB ? "trueAudio" : "falseAudio",
											b: "b",
										},
									},
								},
								0
							);
						}}
					/>
					{buttonShow?.["b"] === "right" ? (
						<div className="answer__result">
							<img src={images.page40.yes40} alt="" />
						</div>
					) : buttonShow?.["b"] === "wrong" ? (
						<div className="answer__result">
							<img src={images.page40.no40} alt="" />
						</div>
					) : null}
				</div>
				<div className="answer__item">
					<img
						src={answer03}
						alt=""
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: clickEventName,
										eventData: {
											playAudio: isAnswerC ? "trueAudio" : "falseAudio",
											c: "c",
										},
									},
								},
								0
							);
						}}
					/>
					{buttonShow?.["c"] === "right" ? (
						<div className="answer__result">
							<img src={images.page40.yes40} alt="" />
						</div>
					) : buttonShow?.["c"] === "wrong" ? (
						<div className="answer__result">
							<img src={images.page40.no40} alt="" />
						</div>
					) : null}
				</div>
				<div className="answer__item">
					<img
						src={answer04}
						alt=""
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "fireEvent",
										eventName: clickEventName,
										eventData: {
											playAudio: isAnswerD ? "trueAudio" : "falseAudio",
											d: "d",
										},
									},
								},
								0
							);
						}}
					/>
					{buttonShow?.["d"] === "right" ? (
						<div className="answer__result">
							<img src={images.page40.yes40} alt="" />
						</div>
					) : buttonShow?.["d"] === "wrong" ? (
						<div className="answer__result">
							<img src={images.page40.no40} alt="" />
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default React.memo(MultipleChoiceGame);
