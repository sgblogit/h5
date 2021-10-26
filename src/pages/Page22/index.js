import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import TitleMeeting from "components/TitleMeetting/index";

const Page22 = (props) => {
  const { onPushAction } = props;

  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState("");

  const [kid, setKid] = useState(images.common.leftKid);
  const [teacher, setTeacher] = useState(images.common.rightTeacher);

  const { currentPage, currentStep, currentRecord } = useSelector(
    (state) => state.app
  );

  const { playAudio, pauseAudio } = audioPlayer;

  const clickEventName = "page22";

  const clickHandler = (e, op) => {
    onPushAction(e, op.actionType, op);
  };

  useEffect(() => {
    if (currentRecord.length > 0) {
      let recordEventData = currentRecord[currentRecord.length - 1];
      if (
        recordEventData.eventPage === currentPage &&
        recordEventData.eventPageStep === currentStep &&
        recordEventData.eventName === clickEventName
      ) {
        console.log(`runRecordEvent`, recordEventData);

        if (recordEventData.eventData.playAudio) {
          //playAudio
          let audioUrl = audios[recordEventData.eventData.playAudio];
          playAudio(audioUrl);
        }
        if (recordEventData.eventData.show1) {
          setShow1(recordEventData.eventData.show1);
        }
        if (recordEventData.eventData.show2) {
          setTimeout(() => {
            setShow2(recordEventData.eventData.show2);
          }, 1500);
        }
      }
    }
  }, [currentRecord]);
  console.log("render page22");
  return (
    <div className="page22">
      {/* <h1>this is page {currentPage}</h1>
      <button
        onClick={(e) => {
          clickHandler(e, {
            actionType: "changePage",
            eventName: "page22",
            eventData: {
              page: 1,
              step: 0,
            },
          });
        }}
      >
        go to page 1
      </button> */}
      <div className="page22-wrapper">
        <TitleMeeting bgTitle={images.common.redMeeting} />

        <div className="session-main22">
          <div className="session-main-list22">
            <div className=" list-item22 list-img">
              <img
                src={kid}
                alt=""
                onClick={(e) => {
                  setKid(images.common.leftKidGif);
                }}
              ></img>
            </div>
            <div
              className={`list-item22 main-content22 hidden  ${
                show2 ? show2 : ""
              }  `}
            >
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "one",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.one} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "two",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.two} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "three",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.three} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "four",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.four} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "five",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.five} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "six",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.six} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "seven",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.seven} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "eight",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.eight} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "night",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.night} alt=""></img>
              </div>
              <div
                className="item"
                onClick={(e) => {
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "ten",
                      active: true,
                    },
                  });
                }}
              >
                <img src={images.page22.ten} alt=""></img>
              </div>
            </div>
            <div className=" list-item22 list-imgTeacher">
              <img
                src={teacher}
                alt=""
                onClick={(e) => {
                  setTeacher(images.common.rightTeacherGif);
                  clickHandler(e, {
                    actionType: "fireEvent",
                    eventName: "page22",
                    eventData: {
                      playAudio: "canyou",
                      active: true,
                      show2: "active",
                      show1: "active",
                    },
                  });
                }}
              ></img>
              <div className={`text-teacher hidden  ${show1 ? show1 : ""}  `}>
                <img src={images.page22.canyou} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Page22);
