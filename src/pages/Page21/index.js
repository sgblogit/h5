import React, { useCallback, useEffect, useState } from "react";
import { Fragment } from "react";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import "./styles.scss";
import { useSelector } from "react-redux";

const Page21 = (props) => {
	const { onPushAction } = props;
	const [teacherImage, setTeacherImage] = useState(images.page21.teacherPage21);
	const [isShowResult, setIsShowResult] = useState(false);
	const { currentRecord } = useSelector((state) => state.app);

	const handleClick = useCallback(
		(e, obj, callback = () => {}) => {
			onPushAction(e, obj.actionType, obj.eventData, callback);
		},
		[onPushAction]
	);

	useEffect(() => {
		if (currentRecord.length > 0) {
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
								src={images.page21.childPage21}
								alt=""
								className="content__child--img"
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
							handleClick(e, {
								actionType: "fireEvent",
								eventData: {
									isShowResult: true,
								},
							});
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default React.memo(Page21);
