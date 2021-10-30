import images from "assets/images/index";
import ButtonControlAudio from "components/ButtonControlAudio/index";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import TitleMeeting from "components/TitleMeetting/index";
import { handleClickImage } from "helper/appServices";
import React from "react";
import "./styles.scss";

const Page50 = (props) => {
	const { onPushAction } = props;

	const clickHandler = (e, op) => {
		onPushAction(e, op?.actionType, op);
	};
	const clickEventName = "page50-final";
	return (
		<div
			className="page50-wrapper"
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
			<TitleMeeting bgTitle={images.page50.titleGamePage50} />
			<div className="page50-content">
				<div className="page50-content__row1 ">
					<div className="page50-content__row1--item">
						<img
							src={images.page50.meoPage50}
							alt=""
							onClick={(e) => {
								handleClickImage(
									clickHandler,
									{
										event: e,
										data: {
											actionType: "changePage",
											eventName: clickEventName,
											eventData: {
												page: 46,
												step: 1,
											},
										},
									},
									0
								);
							}}
						/>
					</div>
					<div className="page50-content__row1--item">
						<img
							src={images.page50.taoPage50}
							alt=""
							onClick={(e) => {
								handleClickImage(
									clickHandler,
									{
										event: e,
										data: {
											actionType: "changePage",
											eventName: clickEventName,
											eventData: {
												page: 46,
												step: 2,
											},
										},
									},
									0
								);
							}}
						/>
					</div>
					<div className="page50-content__row1--item">
						<img
							src={images.page50.page50Seven}
							alt=""
							onClick={(e) => {
								handleClickImage(
									clickHandler,
									{
										event: e,
										data: {
											actionType: "changePage",
											eventName: clickEventName,
											eventData: {
												page: 46,
												step: 5,
											},
										},
									},
									0
								);
							}}
						/>
					</div>
				</div>
				<div className="page50-content__row2 ">
					<div className="page50-content__row2--item">
						<img
							src={images.page50.comPage50}
							alt=""
							onClick={(e) => {
								handleClickImage(
									clickHandler,
									{
										event: e,
										data: {
											actionType: "changePage",
											eventName: clickEventName,
											eventData: {
												page: 46,
												step: 3,
											},
										},
									},
									0
								);
							}}
						/>
					</div>
					<div className="page50-content__row2--item">
						<img
							src={images.page50.childPage50}
							alt=""
							onClick={(e) => {
								handleClickImage(
									clickHandler,
									{
										event: e,
										data: {
											actionType: "changePage",
											eventName: clickEventName,
											eventData: {
												page: 46,
												step: 4,
											},
										},
									},
									0
								);
							}}
						/>
					</div>
				</div>
				<div className="page50-content__row3">
					<img
						src={images.page50.startPage50}
						alt=""
						onClick={(e) => {
							handleClickImage(
								clickHandler,
								{
									event: e,
									data: {
										actionType: "changePage",
										eventName: clickEventName,
										eventData: {
											page: 46,
											step: 1,
										},
									},
								},
								0
							);
						}}
					/>
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

export default React.memo(Page50);
