import React from "react";

import images from "assets/images/index";
import "./styles.scss";
import { handleClickImage } from "helper/appServices";
Question.propTypes = {};

function Question(props) {
  const { audioTeacher, active,teacherImg, teacherText, clickHandler, page } = props;
  return (
    <div className="main-content">
      <div className="main-content-list">
        <div className={`teacher-text hidden  ${active ? active : ""}  `}>
          <img src={teacherText} alt=""></img>
        </div>

        <div className="teacher-img">
          <img
            src={teacherImg}
            alt=""
            onClick={(e) => {
              handleClickImage(
                clickHandler,
                {
                  event: e,
                  data: {
                    actionType: "fireEvent",
                    eventName: page,
                    eventData: {
                      playAudio: audioTeacher,
                      active: true,
                      teacherImg: teacherImg,
                    },
                  },
                },
                0
              );
              // clickHandler(e, {
              // 	actionType: "fireEvent",
              // 	eventName: page,
              // 	eventData: {
              // 		playAudio: audio1,
              // 		active: true,
              // 		imageG1: imageG1,
              // 		textT1: textGT1,
              // 	},
              // });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
