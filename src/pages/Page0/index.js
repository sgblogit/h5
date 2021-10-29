import React, { useEffect, useCallback, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import { useSelector } from "react-redux";

import { runRecord } from "helper/appServices";
import ButtonControlPlayer from "components/ButtonControlPlayer/index";


const Home = (props) => {
	const { onPushAction } = props;
	const [boyRight, setBoyRight] = useState(images.page0.Boy1);
	const [girlLeft, setGirlLeft] = useState(images.page0.Girl1);
	const [car, setCar] = useState(images.page0.Car);
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	const [isPlayAudio, setIsPlayAudio] = useState(false);
	const [cloud, setCloud] = useState(null);
	const [sun, setSun] = useState(null);
	const [activeDisplay, setActiveDisplay] = useState(false);

	let cloudGif = images.page0.cloudGif;
	let sunGif = images.page1.Sun;
	let boyGIF = images.page0.boyGif0;
	let girlGIF = images.page0.girlGif0;
	const clickEventName = "page0";

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				car : setCar,
				cloudGif : setCloud,
				sunGif : setSun,
				activeDisplay : setActiveDisplay,
				girlGIF : setGirlLeft,
				boyGIF : setBoyRight
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	
	const handleControlAudioCustom = useCallback((boolean) => {
		setIsPlayAudio(boolean);
	}, []);
	
	let boyCar = images.page0.CarGif;
	return (
		<div className="page0">
			<div className={`sunphuong hidden ${activeDisplay ? "active" : ""} `}>
				<img src={sun} alt=""></img>
			</div>
			<div className={`mayoi hidden ${activeDisplay ? "active" : ""} `} >
				<img src={cloud} alt=""></img>
			</div>
			<div className="page0-wrraper">
				
					<ButtonControlPlayer
					page="page0"
					clickHandler={clickHandler}
					onPushAction={onPushAction}
					isAutoPlay={false}
					audioName={"infoStart"}
					handleControlAudioCustom={handleControlAudioCustom}
					isPlayAudio={isPlayAudio}
					boyCar={images.page0.CarGif}
					data={
						{
							playAudio: 'infoStart',
							boy : setBoyRight,
							girl : setGirlLeft,
							car : boyCar,
							activeDisplay : true,
							cloudGif : cloudGif ,
							sunGif : sunGif ,
							boyGIF : boyGIF,
							girlGIF : girlGIF
						}
					}
					
			/>
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
		</div>
	);
};

export default React.memo(Home);