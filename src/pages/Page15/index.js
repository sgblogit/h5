import React, { useEffect, useRef, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page15 = (props) => {
	const { onPushAction } = props;

	const [active,setActive] = useState('');
	const [image1, setImage1] = useState(images.page2.kid2);
	const [image, setImage] = useState(images.page2.teacher2);
    const [activeBox, setActiveBox] = useState('');
	const redBlockRef = useRef();

	const [intro,setIntro] = useState(images.page0.kidStart);
	const {
		currentPage,
		currentStep,
		currentRecord,
		prevRecord
	} = useSelector((state) => state.app);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = 'page1';

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op)
	}


	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName) {
				console.log(`runRecordEvent`, recordEventData)
				if (recordEventData.eventData.active) {
					setActive('active')
					//setTimeOutAddClass('red-block','active',2000)
				}else {
					setActive('')
				}
				if (recordEventData.eventData.playAudio) {
					//playAudio
					let audioUrl = audios[recordEventData.eventData.playAudio]
					playAudio(audioUrl)
				}
			}
		}
	}, [currentRecord])
	console.log('render page0')
	return (
		<div className="page15">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page15',
						eventData: {
							page:1,
							step:0
						}
					})
				}}
			>go to page 1</button>
			<div className ="page15-wrapper" >
                <TitleMeeting bgTitle={images.page15.titleMetting15} />
				
                <div className="session-main15">
                    <div className= {`session-title hidden ${activeBox ? activeBox : ""}  `}>
                    <img src={images.page15.Correct} 
                    alt=""
                    ></img>
                    </div>
                    <div className="session-main-list15">
                    <div className=" list-item15 list-img"> 
                        <img src={image1} alt=""
						onClick={(e) => {
							setImage1(images.page1.gKid)
						}}></img>
						
                    </div>
                    <div className= {`list-item15 main-content15 hidden  ${activeBox ? activeBox : ""}  `}>
                        <div className="item">
                            <img src={images.page15.Yes} alt=""
                                onClick={(e) => {
                                    clickHandler(e, {
                                    actionType: 'fireEvent',
                                    eventName: 'page1',
                                    eventData: {
                                        playAudio: 'yes15',
                                        active:true
                                    }
                                })
                                }}
                            ></img>
                        </div>
                    
                        <div className="item">
                            <img src={images.page15.No} alt=""></img>
                        </div>
                    </div>
                    <div className=" list-item15 list-img">
                        <img src={image} alt=""
                            onClick={(e) => {
								setImage(images.page2.gTeacher2)
                                setActiveBox('active')
                                clickHandler(e, {
                                actionType: 'fireEvent',
                                eventName: 'page1',
                                eventData: {
                                    playAudio: 'correct15',
                                    active:true
                                }
                            })
                            }}
                        ></img>
                    </div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default React.memo(Page15);
