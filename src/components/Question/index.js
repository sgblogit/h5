import React from "react";

import "./styles.scss";
Question.propTypes = {};

function Question(props) {
  const { teacherAudio, acctiveDisplay,teacherImg, teacherText, clickHandler, page } = props;
  return (
    <div className="main-content-3">
      <div className="main-content-3-list">
        <div  className={`teacher-text hidden  ${acctiveDisplay ? "active" : ""}  `}>
          <img   src={teacherText} alt=""></img>
        </div>

        <div className="teacher-img" >
          <img
            src={teacherImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
