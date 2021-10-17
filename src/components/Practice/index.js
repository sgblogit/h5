import images from "assets/images/index";
import React, { useState } from "react";
import "./styles.scss";
import Container from "components/Container";

const Practice = (props) => {
  const { currentPage, onPushAction } = props;
  const {
    imagePractice,
    sing,
    talk,
    sit,
    stand,
    fileAudio,
    className,
    kid1,
    kid2,
    kid3,
    kid4,
  } = props;

  const renderContent = () => {
    return (
      <div className="page-wrapper">
        <div className="page-wrapper__content">
          <img
            data-aos="fade-right"
            src={imagePractice}
            alt={imagePractice}
            className="practice"
          />
          <div className="list-kids">
            <div>
              <img
                data-aos="flip-left"
                src={kid1}
                alt={kid1}
                className="kid1"
              />
            </div>
            <div>
              <img
                data-aos="flip-right"
                src={kid2}
                alt={kid2}
                className="kid2"
              />
            </div>
            <div>
              <img
                data-aos="flip-left"
                src={kid3}
                alt={kid3}
                className="kid3"
              />
            </div>
            <div>
              <img
                data-aos="flip-right"
                src={kid4}
                alt={kid4}
                className="kid4"
              />
            </div>
          </div>
          <div
            className="list-answer"
            // data-aos="fade-up"
            // data-aos-anchor-placement="bottom-bottom"
          >
            <img src={sing} alt={sing} className="answer1" />
            <img src={talk} alt={talk} className="answer2" />
            <img src={sit} alt={sit} className="answer3" />
            <img src={stand} alt={stand} className="answer4" />
          </div>
        </div>
      </div>
    );
  };
  return <Container content={renderContent()} currentPage={currentPage} />;
};

export default Practice;
