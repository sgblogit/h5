import React from "react";
import images from "assets/images/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";

HereApple.propTypes = {};

function HereApple(props) {
  const {
    object1,
    ball,
    object2,
    text1,
    text2,
    pic1,
    pic2,
    pic3,
    pic4,
    clickHandler,
    objectG1,
    objectG2,
    audio1,
    audio2,
    page,
    textKid16,
    textTeacher16,
    reverseObj,
    textT1,
    textT2,
    stateSet,
  } = props;
  return (
    <div className="session16-main">
      <TitleMeeting bgTitle={images.common.redMeeting} />
      <div className="session16-main-F">
        <div
          className={`imgPic16  ${stateSet ? stateSet : ""} ${
            textT1 ? textT1 : ""
          }  `}
        >
          <div className="picture-list">
            <img
              src={pic1}
              alt=""
              className="picture"
              onClick={(e) => {}}
            ></img>
            <img
              src={pic2}
              alt=""
              className="picture"
              onClick={(e) => {}}
            ></img>
            <img
              src={pic3}
              alt=""
              className="picture"
              onClick={(e) => {
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio2,
                    active: true,
                    imageG2: objectG2,
                    textT1: "active",
                  },
                });
              }}
            ></img>
            <img
              src={pic4}
              alt=""
              className="picture"
              onClick={(e) => {}}
            ></img>
          </div>
        </div>
        <div
          className={` session16-main-list ${reverseObj ? reverseObj : ""} `}
        >
          <div className="kid">
            <div
              className={`textKid ${textKid16 ? textKid16 : ""}  ${
                textT2 ? textT2 : ""
              } ${stateSet ? stateSet : ""} `}
            >
              {text2 && <img src={text2} alt=""></img>}
            </div>
            <div className={`imgKid`}>
              <img src={object2} alt="" onClick={(e) => {}}></img>
            </div>
          </div>
          <div className="teacher">
            <img
              className="imgTeacher"
              src={object1}
              onClick={(e) => {
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio1,
                    active: true,
                    objectG1: objectG1,
                    textT2: "active",
                    stateSet: "actives",
                  },
                });
              }}
              alt=""
            ></img>

            {text1 && (
              <div
                className={`textTeacher ${
                  textTeacher16 ? textTeacher16 : ""
                }  ${textT1 ? textT1 : ""}  `}
              >
                <img src={text1} alt=""></img>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HereApple;
