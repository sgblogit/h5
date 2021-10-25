import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page25 = (props) => {
	const { onPushAction } = props;

	const [active,setActive] = useState('');
    const [show1, setShow1] = useState('');
    const [show2, setShow2] = useState('');

    const [kid, setKid] = useState(images.page2.kid2);
    const [teacher, setTeacher] = useState(images.page2.teacher2);

	const {
		currentPage,
		currentStep,
		currentRecord	} = useSelector((state) => state.app);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = 'page25';

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
	console.log('render page25')
	return (
		<div className="page25">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page25',
						eventData: {
							page:1,
							step:0
						}
					})
				}}
			>go to page 1</button>
			<div className ="page25-wrapper" >
                <TitleMeeting bgTitle={images.page15.titleMetting15} />
				
                <div className="session-main25">
                    <div className= {`session-title hidden ${show1 ? show1 : ""}  `}>
                    <div className="item">
                        <img src={images.page25.picture2} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture3} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture4} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture5} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture6} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture7} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture8} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture9} alt=""></img>
                    </div>
                    <div className="item">
                        <img src={images.page25.picture10} alt=""></img>
                    </div>
                    

                    </div>
                    <div className="session-main-list25">
                        <div className=" list-item25 list-img"> 
                            <img src={kid} alt=""
                                onClick={(e) => {
                                    setKid(images.page2.gKid2)
                                    
                                }}
                            ></img>
                        </div>
                        <div className= {`list-item25 main-content25 hidden  ${show2 ? show2 : ""}  `}>
                    
                            <div className="item">
                                <img src={images.page25.picture1} alt=""></img>
                            </div>
                        </div>
                        <div className=" list-item25 list-imgTeacher">
                            <img src={teacher} alt=""
                               onClick={(e) => {
                                setTeacher(images.page2.gTeacher2)
                                setTimeout(() => {
                                    setShow1("active")
                                }, 1500);
                                setShow2("active")
                                clickHandler(e, {
                                    actionType: 'fireEvent',
                                    eventName: 'page25',
                                    eventData: {
                                        playAudio: 'voice25',
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

export default React.memo(Page25);
