import React, { useState } from "react";

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
    reverseObj
  } = props;
  const [image1, setImage1] = useState(object1);
  const [image2, setImage2] = useState(object2);
  const [stateSet, setStates] = useState('');
  const [textT1, setTextT1] = useState('');
  const [textT2, setTextT2] = useState('');
  return (
    <div className="session16-main">
      <TitleMeeting bgTitle={images.page16.meeting16} />
      <div className={`imgPic  ${stateSet ? stateSet : ""}  `} >
            <img
              src={pic1}
              alt=""
              className="picture"
              onClick={(e) => {
                
              }}
            ></img>
            <img
              src={pic2}
              alt=""
              className="picture"
              onClick={(e) => {
                
              }}
            ></img>
            <img
              src={pic3}
              alt=""
              className="picture"
              onClick={(e) => {
                setImage2(objectG2)
                setTextT1('active')
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
            <img
              src={pic4}
              alt=""
              className="picture"
              onClick={(e) => {
                
              }}
            ></img>
          </div>
      <div className={` session16-main-list ${reverseObj ? reverseObj : ""} `}>
      
      <div className="kid">
          <div className={`textKid ${textKid16? textKid16:"" }  ${textT2 ? textT2 : ""} ${stateSet ? stateSet : ""} `}>
            {text2 && <img src={text2} alt=""></img>}
          </div>
          <div className={`imgKid`}>
            <img
              src={image2}
              alt=""
              onClick={(e) => {
                
              }}
            ></img>
          </div>
        </div>
                <div className="teacher">
         
         <img className="imgTeacher"
           src={image1}
           onClick={(e) => {
             setImage1(objectG1)
             setTextT2('active')
             setStates('actives')
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
         <div className={`textTeacher ${textTeacher16? textTeacher16:"" }  ${textT1 ? textT1 : ""}  `}>
           <img src={text1} alt=""></img>
         </div>
       )}
     </div>
     
      </div>
      
    </div>
  );
}

export default HereApple;
