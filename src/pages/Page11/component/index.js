import React, { useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
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
  const [teacherImg, setImageTeacher] = useState(teacher);
  const [kidImg, setImageKid] = useState(kid);
  const [textT1, setTextT1] = useState("");
  const [active2, setActive2] = useState("");

  return (
    <div className="session-main-page11">
      <div className="session-main-page11-list">
        <div className="teacher-wrapper">
          <div className="teacher">
            <img
              className="imgTeacher"
              src={teacherImg}
              onClick={(e) => {
                setImageTeacher(teacherGif);
                setTextT1("active");
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audioTeacher,
                    active: true,
                  },
                });
              }}
              alt=""
            ></img>

            {text && (
              <div
                className={`text-teacher ${className ? className : ""}  ${
                  textT1 ? textT1 : ""
                }  `}
              >
                <img src={text} alt=""></img>
              </div>
            )}
          </div>
        </div>
        <div className= {`list-item hidden  ${active2 ? active2 : ""}  `}>
          <div className="item cake">
            <img src={cake} alt={cake} />
          </div>
          <div className="item egg">
            <img src={egg} alt={egg} />
          </div>
          <div className="item pasta">
            <img src={pasta} alt={pasta} />
          </div>
          <div className="item candy">
            <img src={candy} alt={candy} />
          </div>
        </div>
        <div className="kid-wrapper">
          <img
            src={kidImg}
            alt={kidImg}
            onClick={(e) => {
              setImageKid(kidGif);
              setActive2("active2")
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
