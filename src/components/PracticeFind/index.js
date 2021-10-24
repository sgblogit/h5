import React, { useState } from "react";

import images from "assets/images/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";

PracticeFind.propTypes = {};

function PracticeFind(props) {
  const {
    object1,
    ball,
    object2,
    text1,
    text2,
    clickHandler,
    objectG1,
    objectG2,
    audio1,
    audio2,
    page,
    textKid14,
    textTeacher14,
    reverseObj,
    ballX,
  } = props;

  const [image1, setImage1] = useState(object1);
  const [image2, setImage2] = useState(object2);
  const [textT1, setTextT1] = useState('');
  const [textT2, setTextT2] = useState('');
  return (
    <div className="session17-main">
      <TitleMeeting bgTitle={images.page17.meet17} />
      <div className={` session17-main-list ${reverseObj ? reverseObj : ""} `}>
        <div className="teacher">
         
            <img className="imgTeacher"
              src={image1}
              onClick={(e) => {
                setImage1(objectG1)
                setTextT1('active')
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio1,
                    active: true,
                  },
                });
              }}
              alt=""
            ></img>
     
          {text1 && (
            <div className={`textTeacher ${textTeacher14? textTeacher14:"" }  ${textT1 ? textT1 : ""}  `}>
              <img src={text1} alt=""></img>
            </div>
          )}
        </div>

        <div className={`ball ${ballX? ballX:"" } `}>
          <img src={ball} alt=" "></img>
        </div>

        <div className="kid">
          <div className={`textKid ${textKid14? textKid14:"" }  ${textT2 ? textT2 : ""}  `}>
            {text2 && <img src={text2} alt=""></img>}
          </div>
          <div className="imgKid">
            <img
              src={image2}
              alt=""
              onClick={(e) => {
                setImage2(objectG2)
                setTextT2('active')
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audio2,
                    active: true,
                  },
                });
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeFind;
