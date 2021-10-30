import React, { useCallback, useEffect, useState } from "react";
import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
import { handleClickImage, runRecord } from "helper/appServices";
import { useSelector } from "react-redux";
const Page45 = (props) => {
	const { onPushAction } = props;
	const [buttonShow, setButtonShow] = useState([]);
	const currentRecord = useSelector((state) => state.app.currentRecord);
	const handleSetButtonShow = useCallback((value) => {
		const boolean = value === "c" ? "right" : "wrong";
		setButtonShow((pre) => ({ [value]: boolean }));
	}, []);

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	const clickEventName = "page45-click";

	useEffect(() => {
		runRecord({
			eventName: clickEventName,
			callbacks: {
				a: handleSetButtonShow,
				b: handleSetButtonShow,
				c: handleSetButtonShow,
				d: handleSetButtonShow,
			},
		});
	}, [currentRecord, handleSetButtonShow]);

	console.log(buttonShow, "buttonShowbuttonShow");

	return (
		<div
			className="page45-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center", marginTop: "40px" }
			}
		>
			<TitleMeeting bgTitle={images.common.title} />
			<div className="page45-content">
				<div className="page45-content__result">
					<div className="page45-content__result--item">
						<img
							src={images.page45.bo}
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
					<div className="page45-content__result--item">
						<img
							src={images.page45.cam}
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
					<div className="page45-content__result--item">
						<img
							src={images.page45.tao}
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
												playAudio: "trueAudio",
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
					<div className="page45-content__result--item">
						<img
							src={images.page45.chuoi}
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
				<div className="page45-content__question">
					<div className="page45-content__question--child">
						<img src={images.page45.childPage45} alt="" />
					</div>
					<div className="page45-content__question--question">
						<img src={images.page45.question} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page45);
