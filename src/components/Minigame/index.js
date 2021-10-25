import React, { useState } from "react";

import images from "assets/images/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";

Minigame.propTypes = {};

function Minigame(props) {
  const {
    object1,
    object2,
    clickHandler,
    objectG1,
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
    audio6,
    page,
    congrats1,
    congrats2,
    congrats3,
    congrats4,
    congrats5,
    audiowin
  } = props;

  const [image1, setImage1] = useState(object1);
  const [image2, setImage2] = useState(object2);
  const [textT1, setTextT1] = useState('');
  const [textT2, setTextT2] = useState('');
  const [textT3, setTextT3] = useState('');
  const [textT4, setTextT4] = useState('');
  const [textT5, setTextT5] = useState('');
  const [textT6, setTextT6] = useState('');

  return (
    <div className="session20-main">
      <TitleMeeting bgTitle={images.page26.minigame26} />
      <img src={congrats1} alt="" className={` full hide ${textT2 ? textT2 : ""} `} />
      <img src={congrats2} alt="" className={` full hide ${textT3 ? textT3 : ""} `} />
      <img src={congrats3} alt="" className={` full hide ${textT4 ? textT4 : ""} `} />
      <img src={congrats4} alt="" className={` full hide ${textT5 ? textT5 : ""} `} />
      <img src={congrats5} alt="" className={` full hide ${textT6 ? textT6 : ""} `} />
            <img src={images.page26.what26} className="what" alt="" />        
       
            <img src={image1} className="box1" alt="" onClick={(e) => {
                setImage1(objectG1)
                
                setTimeout(function() {
                  setImage1(image2);
                  setTextT1('activehide')
                }
                .bind(this),2600)
                
              }} />
              <div className={` hide ${textT1 ? textT1 : ""} `}>
                <img src={images.page26.A26} className="img1" alt="" onClick={(e) => {
                  setTextT2('activehide')
                  setTimeout(function() {
                    setTextT2('')
                    clickHandler(e, {
                      actionType: "fireEvent",
                      eventName: page,
                      eventData: {
                        playAudio: audiowin,
                        active: true,
                      },
                    });
                  }
                  .bind(this),3000)
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio1,
                    active: true,
                  },
                });
              }}  />
                <img src={images.page26.apple26} className="img2 left" alt=""  onClick={(e) => {
                  setTextT3('activehide')
                  setTimeout(function() {
                    setTextT3('')
                    clickHandler(e, {
                      actionType: "fireEvent",
                      eventName: page,
                      eventData: {
                        playAudio: audiowin,
                        active: true,
                      },
                    });
                  }
                  .bind(this),3000)
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio2,
                    active: true,
                  },
                });
              }}  />
                <img src={images.page26.ball26} className="img2 right" alt="" onClick={(e) => {
                  setTextT4('activehide')
                  setTimeout(function() {
                    setTextT4('')
                    clickHandler(e, {
                      actionType: "fireEvent",
                      eventName: page,
                      eventData: {
                        playAudio: audiowin,
                        active: true,
                      },
                    });
                  }
                  .bind(this),3000)
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio3,
                    active: true,
                  },
                });
              }}  />
                <img src={images.page26.cat26} className="img3 left" alt="" onClick={(e) => {
                  setTextT5('activehide')
                  setTimeout(function() {
                    setTextT5('')
                    clickHandler(e, {
                      actionType: "fireEvent",
                      eventName: page,
                      eventData: {
                        playAudio: audiowin,
                        active: true,
                      },
                    });
                  }
                  .bind(this),3000)
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio4,
                    active: true,
                  },
                });
              }}  />
                <img src={images.page26.bear26} className="img3 right" alt="" onClick={(e) => {
                  setTextT6('activehide')
                  setTimeout(function() {
                    setTextT6('')
                    clickHandler(e, {
                      actionType: "fireEvent",
                      eventName: page,
                      eventData: {
                        playAudio: audiowin,
                        active: true,
                      },
                    });
                  }
                  .bind(this),3000)
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio5,
                    active: true,
                  },
                });
              }}  />
                <img src={images.page26.two26} className="img4" alt="" onClick={(e) => {
                  setTextT2('activehide')
                  setTimeout(function() {
                    setTextT2('')
                    clickHandler(e, {
                      actionType: "fireEvent",
                      eventName: page,
                      eventData: {
                        playAudio: audiowin,
                        active: true,
                      },
                    });
                  }
                  .bind(this),3000)
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio6,
                    active: true,
                  },
                });
              }}  />
              </div>
      
    </div>
  );
}

export default Minigame;
