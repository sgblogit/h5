import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import "./styles.scss";
import { runRecord } from "helper/appServices";
import images from "assets/images/index";
import { handleClickImage } from "helper/appServices";

const Page44 = (props) => {
	const { onPushAction } = props;
	const { currentRecord } = useSelector(
		(state) => state.app
	);
	
	const { playAudio } = audioPlayer;

	const clickEventName = "page44";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	
	const [fruit, setFruit] = useState(images.page44.fruitPage44);
	const [kid, setKid] = useState(images.page44.kidPage44);
	// const [icon, setIcon] = useState(images.page44.iconPage44);
	// const [textT2, setTextT2] = useState(null);
	const [hide, setHide] = useState(null);

    let fruitGif =  images.page44.fruitGif;
    let kidGif =  images.page44.kidGifPage44;


	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
               fruitGif: setFruit,
               kidGif: setKid,
                hidden: setHide,
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page44">
				<div className="main-content-44">
					<div className="main-content-44-list">
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
										kidGif : kidGif,
                                        fruitGif: fruitGif,
                                        hide: hide,

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
						<div className="kid-wrapper">
							<img
								alt=""
								src={kid} 
							/>
						</div>
						<div className="item-wrapper">
							<div className="icon-wrapper">
							<img
                            className={`acctive  ${hide ? "hidden" : ""} `}
								alt=""
								src={images.page44.iconPage44}
							/>
							</div>
							<div className="fruit-wrapper">
							<img
								alt=""
								src={fruit}
							/>
							</div>
						</div>
					</div>
				</div>
		</div>
	);
};

export default React.memo(Page44);
