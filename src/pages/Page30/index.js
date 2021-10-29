import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
import ButtonControlPlayer from "components/ButtonControlPlayer/index";
const Page30 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page30";

	const [isPlayAudio, setIsPlayAudio] = useState(false);

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
			
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const handleControlAudioCustom = useCallback((boolean) => {
		setIsPlayAudio(boolean);
	}, []);
	return (
		<div className="page30">
				<ButtonControlPlayer
					page="page30"
					clickHandler={clickHandler}
					onPushAction={onPushAction}
					isAutoPlay={false}
					audioName={"Vce30"}
					handleControlAudioCustom={handleControlAudioCustom}
					isPlayAudio={isPlayAudio}
					boyCar={images.page0.CarGif}
					
					data={
						{
							playAudio: 'Vce30',
							active: true,
						}
					}
			/>
			<div className="page30-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<div className="main">
                    <div className="page30-left item">
						<img src={images.page30.BaChu} alt=""></img>
					</div>
					<div className="page30-middle">
                        <img src={images.page30.Stove} alt=""></img>
					</div>
					<div className="page30-right item">
                        <img src={images.page30.DamTre} alt=""></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page30);
