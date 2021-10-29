import React, { useEffect, useCallback, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import ButtonControlAudio from "components/ButtonControlAudio/index";
import { runRecord } from "helper/appServices";

import { handleClickImage } from "helper/appServices";

const Home = (props) => {
	const { onPushAction } = props;
	const { playAudio } = audioPlayer;
	const [boyRight, setBoyRight] = useState(images.page0.Boy1);
	const [girlLeft, setGirlLeft] = useState(images.page0.Girl1);
	const [car, setCar] = useState(images.page0.Car);
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [thunder, setThunder] = useState(null);
	const [cloud, setCloud] = useState(null);
	const [sun, setSun] = useState(null);
	const [activeDisplay, setActiveDisplay] = useState(false);

	let cloudGif = images.page0.cloudGif;
	let thunderGif = images.page1.SamSet;
	let sunGif = images.page1.Sun;
	const clickEventName = "page0";

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				car : setCar,
				cloudGif : setCloud,
				thunderGif : setThunder,
				sunGif : setSun,
				activeDisplay : setActiveDisplay
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	let boyCar = images.page0.CarGif;
	return (
		<div className="page0">
			<div className={`sunphuong hidden ${activeDisplay ? "active" : ""} `}>
				<img src={sun} alt=""></img>
			</div>
			<div className={`samset hidden ${activeDisplay ? "active" : ""} `}>
				<img src={thunder} alt=""></img>
			</div>
			<div className={`mayoi hidden ${activeDisplay ? "active" : ""} `} >
				<img src={cloud} alt=""></img>
			</div>
			<div className="page0-wrraper">
				<button className="controll"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: 'page0',
									eventData: {
										playAudio: 'infoStart',
										active: true,
										boy : setBoyRight,
										girl : setGirlLeft,
										car : boyCar,
										activeDisplay : true,
										cloudGif : cloudGif ,
										thunderGif : thunderGif,
										sunGif : sunGif
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
				<div className="main">
					<div className="car-pos">
							<img src={car} alt="">

							</img>
						</div>
					<div className="main-page0">
						<div className="page0-left item">
							<img src={girlLeft} alt="">

							</img>
						</div>
						<div className="page0-middle">
						</div>
						<div className="page0-right item">
							<img src={boyRight} alt="">

							</img>
						</div>
					</div>
				</div>
			</div>
			{/* <ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"voiceStart"}
				handleControlAudioCustom={handleControlAudioCustom}
				isPlayAudio={isPlayAudio}
			/> */}
		</div>
	);
};

export default React.memo(Home);
