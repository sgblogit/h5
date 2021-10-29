import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
const Page30 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page30";

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

	return (
		<div className="page30">
			<button className="controll"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: 'page30',
									eventData: {
										playAudio: 'Vce30',
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
