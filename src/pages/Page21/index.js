import React, { useCallback, useEffect, useState } from "react";
import { Fragment } from "react";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_DATA } from "constants/app";
import { setCurrentData } from "redux/currentData";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

const eventName = "clickPage21";

const Page21 = (props) => {
	const dispatch = useDispatch();
	const { onPushAction } = props;
	const [teacherImage, setTeacherImage] = useState(images.page21.teacherPage21);
	const [childImage, setChildImage] = useState(images.page21.childPage21);
	const [isShowResult, setIsShowResult] = useState(false);
	const { currentRecord, currentPage, currentStep } = useSelector(
		(state) => state.app
	);

	const handleClick = useCallback(
		(e, obj) => {
			onPushAction(e, obj.actionType, obj);
		},
		[onPushAction]
	);

	// const nextStep = useCallback(() => {
	// 	if (currentStep === PAGE_DATA[currentPage].length - 1) {
	// 		if (currentPage === PAGE_DATA.length - 1) {
	// 			return false;
	// 		}
	// 		audioPlayer.cleanAllAudio();
	// 		dispatch(
	// 			setCurrentData({
	// 				currentPage: currentPage + 1,
	// 				currentStep: 0,
	// 				currentRecord: [],
	// 				prevRecord: [],
	// 			})
	// 		);
	// 		return false;
	// 	}
	// 	dispatch(
	// 		setCurrentData({
	// 			currentPage: currentPage,
	// 			currentStep: currentStep + 1,
	// 		})
	// 	);
	// }, [currentPage, currentStep, dispatch]);

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === eventName
			) {
				if (recordEventData.eventData.isShowResult) {
					if (recordEventData.eventData.imageGifTeacher) {
						setTeacherImage(images.page21.teacherPage21Gif);
					}
					setIsShowResult(true);
				}
				if (recordEventData.eventData.playAudio) {
					if (recordEventData.eventData.imageGifChild) {
						setChildImage(recordEventData.eventData.imageGifChild);
					}
					const audio = audios[recordEventData.eventData.playAudio];
					audioPlayer.playAudio(audio);
				}
			}
		}
	}, [currentRecord]);

	return (
		<Fragment>
			<TitleMeeting bgTitle={images.page21.titleMeetingPage21} />
			<div
				className="content"
				style={{
					alignItems:
						window.innerWidth < window.innerHeight ? "center" : "flex-end",
				}}
			>
				{isShowResult ? (
					<div className="content__child">
						<div className="control-flex0">
							<img
								src={childImage}
								alt=""
								className="content__child--img"
								onClick={(e) => {
									// nextStep();
									handleClick(e, {
										actionType: "fireEvent",
										eventName: eventName,
										eventData: {
											// playAudio: "voiceTextPage21",
											imageGifChild: images.page21.childPage21Gif,
										},
									});
								}}
							/>
						</div>
						<div className="content__child--result">
							<div className="control-flex1">
								<img src={images.page21.numbersPage21} alt="" />
							</div>
							<div className="control-flex2">
								<img src={images.page21.textPage21} alt="" />
							</div>
						</div>
					</div>
				) : null}

				<div className="control-flex3">
					<img
						src={teacherImage}
						alt=""
						className="content__teacher"
						onClick={(e) => {
							if (!isShowResult) {
								handleClick(e, {
									actionType: "fireEvent",
									eventName: eventName,
									eventData: {
										isShowResult: true,
										playAudio: "voiceTextPage21",
										imageGifTeacher: images.page21.teacherPage21Gif,
									},
								});
							}
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default React.memo(Page21);
