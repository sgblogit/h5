import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import Question from "components/Question/index";
import { handleClickImage, runRecord } from "helper/appServices";
import ClassRoom from "components/ClassRoom/index";

const Page4 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page4";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	// const [image1, setImage1] = useState(images.common.leftTeacher);
	// const [image2, setImage2] = useState(images.common.rightKid);
	const [teacherImg1, setImageTeacher] = useState(images.page4.teacherGifPage4);
	const [active, setActive] = useState("");
	// const [textT2, setTextT2] = useState(null);

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				teacherImg: setImageTeacher,
				active: setActive,
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);
	console.log("render page4");
	return (
		<div className="page4">
			{/* <h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page4",
						eventData: {
							page: 2,
							step: 0,
						},
					});
				}}
			>
				go to page 2
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page4",
						eventData: {
							playAudio: "gitAudio",
							active: false,
						},
					});
				}}
			>
				play audio
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page4",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button> */}
			<div className="page-wrraper">
			<button className="controll-right"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: 'page44',
									eventData: {
										playAudio: 'audioPage44',
										active: true,
						

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
				<TitleMeeting bgTitle={images.common.title} />
				<ClassRoom	
					kidImg={images.page4.kidPage4}
					kidText={images.page4.textPage4}
					audioKid="audioPage4"
					page="page4"
					clickHandler={clickHandler}
					active ={active}

				/>
			</div>
		</div>
	);
};

export default React.memo(Page4);
