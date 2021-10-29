import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";

const Page3 = (props) => {

	const { onPushAction } = props;

	const {  currentRecord } = useSelector(
		(state) => state.app
	);

	const [activeDisplay, setActiveDisplay] = useState(false);


	const clickEventName = "page3";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	const [iconTeacher, setIconTeacher] = useState(images.page3.IconTeacher);
	let ChildGIF = images.page3.TeacherSayGIF;
	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				ChildGIF : setIconTeacher,
				activeDisplay : setActiveDisplay
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page3">
			<button className="controll-right"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: 'page3',
									eventData: {
										playAudio: 'HelloKid',
										active: true,
										activeDisplay : true,
										ChildGIF : ChildGIF
									},
								},
							},
							0
						);
						
					}}
				>
				<img src={images.common.Button} alt="">
					</img>
			</button>
			<TitleMeeting bgTitle={images.common.title}/>
			<div className="page-wrraper">
				<div className="main">
					<div className= {`text hidden ${activeDisplay ? "active" : ""} `}>
						<img src={images.page3.TextHello} alt=""></img>
					</div>
					<div className="icon-teacher">
						<img src={iconTeacher} alt=""></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page3);
