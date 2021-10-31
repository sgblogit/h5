import React, { useEffect } from "react";
import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
import ButtonControlAudio from "components/ButtonControlAudio/index";
import { handleClickImage, runRecord } from "helper/appServices";
import { useSelector } from "react-redux";
const Page47 = (props) => {
	const { onPushAction } = props;
	const currentRecord = useSelector((state) => state.app.currentRecord);
	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	const clickEventName = "page47-click";

	useEffect(() => {
		runRecord({
			eventName: clickEventName,
			callbacks: {},
		});
	}, [currentRecord]);

	return (
		<div
			className="page47-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center", marginTop: "40px" }
			}
		>
			<TitleMeeting bgTitle={images.common.title} />
			<div className="page47-content">
				<div className="page47-content__question">
					<div className="page47-content__question--child">
						<img
							src={images.page47.child}
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
												playAudio: "canYouCount",
											},
										},
									},
									0
								);
							}}
						/>
					</div>
					{/* <div className="page47-content__question--question">
						<img
							src={images.page47.questionPage47}
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
												playAudio: "number1",
											},
										},
									},
									0
								);
							}}
						/>
					</div> */}
					<div className="page47-content__result">
						<div className="page47-content__result--item">
							<img
								src={images.page47.one}
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
													playAudio: "number1",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.two}
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
													playAudio: "number2",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.three}
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
													playAudio: "number3",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.four}
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
													playAudio: "number4",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.five}
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
													playAudio: "number5",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.six}
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
													playAudio: "number6",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.seven}
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
													playAudio: "number7",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.eight}
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
													playAudio: "number8",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.nine}
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
													playAudio: "number9",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
						<div className="page47-content__result--item">
							<img
								src={images.page47.ten}
								alt=""
								className="ten"
								onClick={(e) => {
									handleClickImage(
										clickHandler,
										{
											event: e,
											data: {
												actionType: "fireEvent",
												eventName: clickEventName,
												eventData: {
													playAudio: "number10",
												},
											},
										},
										0
									);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"page47AudioBg"}
				urlButtonPlay={images.common.play}
				urlButtonPause={images.common.Pauses}
			/>
		</div>
	);
};

export default React.memo(Page47);
