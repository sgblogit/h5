import React, { useState } from "react";
import images from "assets/images/index";

function Favorites(props) {
  const {
    cake,
    pasta,
    candy,
    egg,
    page,
    kidGif,
    teacherGif,
    text,
    clickHandler,
    audioTeacher,
    audioKid,
    className,
    teacher,
    kid,
  } = props;
  const [img1, setImageCake] = useState(cake);
  const [img2, setImageEgg] = useState(egg);
  const [img3, setImagePasta] = useState(pasta);
  const [img4, setImageCandy] = useState(candy);
  const [teacherImg, setImageTeacher] = useState(teacher);
  const [kidImg, setImageKid] = useState(kid);
  const [textT1, setTextT1] = useState("");

  return (
    <div className="session-main">
      <div className="session-main-list">
        <div className="teacher-wrapper">
          <div className="teacher">
            <img
              src={teacherImg}
              alt={teacherImg}
              onClick={(e) => {
                setImageTeacher(teacher)
                setTextT1(text);
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audioTeacher,
                    active: true,
                  },
                });
              }}
            />
          </div>
          <div>
            <img
              src={textT1}
              alt={textT1}
              className={`"text "${textT1 === "" ? "d-none" : " "}${
                className ? className : ""
              } `}
            />
          </div>
        </div>
        <div className="list-item">
          <div className="cake">
            <img src={img1} alt={img1} />
          </div>
          <div className="egg">
            <img src={img2} alt={img2} />
          </div>
          <div className="pasta">
            <img src={img3} alt={img3} />
          </div>
          <div className="candy">
            <img src={img4} alt={img4} />
          </div>
        </div>
        <div className="kid-wrapper" >
            <img
                 src={kidImg}
              alt={kidImg}
              onClick={(e) => {
                setImageKid(kidGif);
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audioKid,
                    active: true,
                  },
                });
              }}
            />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
