import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
const Page31 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	const [activeRing, setActiveRing] = useState(false);
	const [chifIcon, setChifIcon] = useState(images.page31.BaChu31);
	let chifGif = images.common.ChifGif;
	const clickEventName = "page31";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				activeRing : setActiveRing,
				ChifGif : setChifIcon
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page31">
			<button className="controll"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: 'page31',
									eventData: {
										playAudio: 'Vce31',
										active: true,
										activeRing : true,
										ChifGif : chifGif
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
			
			<div className="page31-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<div className= {`main ${activeRing ? "activeRingP" : ""} `}>
                    <div className="page31-left">
						<img src={chifIcon} alt=""></img>
					</div>
					<div className="page31-middle">
						<div className="text item">
							<img src={images.page31.TextBaChu} alt=""></img>
						</div>
						<div className="item stove">
							<img   src={images.page31.Stove31} alt=""></img>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page31);
