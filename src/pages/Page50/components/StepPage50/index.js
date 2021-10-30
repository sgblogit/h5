import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import { handleClickImage, runRecord } from "helper/appServices";
import ButtonControlAudio from "components/ButtonControlAudio/index";

const StepPage50 = (props) => {
	const { onPushAction } = props;
	const { urlQuestion, urlAnswerA, urlAnswerB, urlAnswerC, urlAnswerD } = props;
	const { currentRecord, currentStep } = useSelector((state) => state.app);
	const [buttonShow, setButtonShow] = useState([]);
	const [isShowCheckIcon, setIsShowCheckIcon] = useState({});

	const handleSetButtonShow = useCallback(
		(value) => {
			let boolean;
			switch (currentStep) {
				case 1:
					boolean = value === "c" ? "right" : "wrong";
					break;
				case 2:
					boolean = value === "a" ? "right" : "wrong";
					break;
				case 3:
					boolean = value === "c" ? "right" : "wrong";
					break;
				case 4:
					boolean = value === "b" ? "right" : "wrong";
					break;
				default:
					break;
			}
			setButtonShow((pre) => ({ [value]: boolean }));
		},
		[currentStep]
	);

	const handleSetIsShowCheckIcon = useCallback((value) => {
		setIsShowCheckIcon({ [value]: true });
	}, []);

	const clickEventName = "page14";

	const clickHandler = (e, op) => {
		onPushAction(e, op?.actionType, op);
	};

	useEffect(() => {
		runRecord({
			eventName: clickEventName,
			callbacks: {
				isShowCheckIconA: handleSetIsShowCheckIcon,
				isShowCheckIconB: handleSetIsShowCheckIcon,
				isShowCheckIconC: handleSetIsShowCheckIcon,
				isShowCheckIconD: handleSetIsShowCheckIcon,
				a: handleSetButtonShow,
				b: handleSetButtonShow,
				c: handleSetButtonShow,
				d: handleSetButtonShow,
			},
		});
		return () => {
			setButtonShow([]);
			setIsShowCheckIcon({});
		};
	}, [currentRecord, handleSetButtonShow, handleSetIsShowCheckIcon]);

	return (
		<div
			className="step"
			style={
				window.innerWidth < window.innerHeight
					? {
							alignItems: "flex-end",
					  }
					: {
							alignItems: "center",
							marginTop: "40px",
					  }
			}
		>
			<TitleMeeting bgTitle={images.page50.titleStep} />
			<div className="step-content">
				<div className="step-content__question">
					<img src={urlQuestion} alt="" />
				</div>
				<div className="step-content__answer">
					<div className="step-content__answer--item">
						<img
							src={urlAnswerA}
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
												playAudio:
													currentStep === 2 ? "trueAudio" : "falseAudio",
												a: "a",
												isShowCheckIconA: "a",
											},
										},
									},
									0
								);
							}}
						/>
						{buttonShow?.["a"] === "right" && isShowCheckIcon?.["a"] ? (
							<div className="answer__result">
								<img src={images.page40.yes40} alt="" />
							</div>
						) : buttonShow?.["a"] === "wrong" && isShowCheckIcon?.["a"] ? (
							<div className="answer__result">
								<img src={images.page40.no40} alt="" />
							</div>
						) : null}
					</div>
					<div className="step-content__answer--item">
						<img
							src={urlAnswerB}
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
												playAudio:
													currentStep === 4 ? "trueAudio" : "falseAudio",
												b: "b",
												isShowCheckIconB: "b",
											},
										},
									},
									0
								);
							}}
						/>
						{buttonShow?.["b"] === "right" && isShowCheckIcon?.["b"] ? (
							<div className="answer__result">
								<img src={images.page40.yes40} alt="" />
							</div>
						) : buttonShow?.["b"] === "wrong" && isShowCheckIcon?.["b"] ? (
							<div className="answer__result">
								<img src={images.page40.no40} alt="" />
							</div>
						) : null}
					</div>
					<div className="step-content__answer--item">
						<img
							src={urlAnswerC}
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
												playAudio:
													currentStep === 1 || currentStep === 3
														? "trueAudio"
														: "falseAudio",
												c: "c",
												isShowCheckIconC: "c",
											},
										},
									},
									0
								);
							}}
						/>
						{buttonShow?.["c"] === "right" && isShowCheckIcon?.["c"] ? (
							<div className="answer__result">
								<img src={images.page40.yes40} alt="" />
							</div>
						) : buttonShow?.["c"] === "wrong" && isShowCheckIcon?.["c"] ? (
							<div className="answer__result">
								<img src={images.page40.no40} alt="" />
							</div>
						) : null}
					</div>
					<div className="step-content__answer--item">
						<img
							src={urlAnswerD}
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
												playAudio: "falseAudio",
												d: "d",
												isShowCheckIconD: "d",
											},
										},
									},
									0
								);
							}}
						/>
						{buttonShow?.["d"] === "right" && isShowCheckIcon?.["d"] ? (
							<div className="answer__result">
								<img src={images.page40.yes40} alt="" />
							</div>
						) : buttonShow?.["d"] === "wrong" && isShowCheckIcon?.["d"] ? (
							<div className="answer__result">
								<img src={images.page40.no40} alt="" />
							</div>
						) : null}
					</div>
				</div>
			</div>
			<ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"bgAudio15"}
				urlButtonPlay={images.common.play}
				urlButtonPause={images.common.Pauses}
			/>
		</div>
	);
};

export default React.memo(StepPage50);
