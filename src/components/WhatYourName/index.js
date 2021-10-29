import React from "react";
import images from "assets/images/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import { handleClickImage } from "helper/appServices";

WhatYourName.propTypes = {};
function WhatYourName(props) {
  const {
    page,
    text,
    audio,
    image1,
    imageG1,
    reverseObj,
    clickHandler,
    textGT1,
    textGT2,
    text2,
    textunder,
    textunder2,
    activeDisplay,
    audio2,
  } = props;

  return (
    <div className="session20-main">
      <button
        className="control-right"
        onClick={(e) => {
          handleClickImage(
            clickHandler,
            {
              event: e,
              data: {
                actionType: "fireEvent",
                eventName: page,
                eventData: {
                  playAudio: audio,
                  // playAudio: audio2,
                  active: true,
                  imageG1: imageG1,
                  textT1: textGT1,
                  textT2: textGT2,
                  activeDisplay: true,
                },
              },
            },
            0
          );
        }}
      >
        <img src={images.common.Button} alt=""></img>
      </button>
      <TitleMeeting bgTitle={images.common.title} />
      <div className={` session20-content ${reverseObj ? reverseObj : ""} `}>
        <div
          className={` left-e activeRing   `}
        >
          {text && (
            <div className={`text ${textunder ? textunder : ""}`}>
              <img src={text} alt=""></img>
            </div>
          )}
          {text2 && (
            <div className={`text ${textunder2 ? textunder2 : ""}`}>
              <img src={text2} alt=""></img>
            </div>
          )}
        </div>
        <div className="right-e">
          <img src={image1} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default WhatYourName;
