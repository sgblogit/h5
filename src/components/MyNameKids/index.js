import React from "react";

import images from "assets/images/index";
import "./styles.scss";
import { handleClickImage } from "helper/appServices";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentData } from "redux/currentData";
MyNameKids.propTypes = {};

function MyNameKids(props) {
  const {
    image1,
    image2,
    prevImage,
    buttonAudio,
    audio,
    page,
    clickHandler,
    imageG1,
    currentPage,
  } = props;
  const dispatch = useDispatch();
  // onClick={(e) => {dispatch(
  // 	setCurrentData({
  // 		currentPage: currentPage + 5,
  // 		currentStep: 0,
  // 		currentRecord: [],
  // 		prevRecord: [],
  // 		isLoading: true,
  // 	})
  // );}}
  return (
    <div className="session-main-9">
      <div className="session-main-9-list">
        <div className=" list-item list-img">
          <img
            src={buttonAudio}
            className="button-audio"
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
                      imageG1: imageG1,
                    },
                  },
                },
                0
              );
            }}
            alt=""
            data-id={audio}
          ></img>
          <img src={image1} alt=""></img>
          <img alt="" src={image2} className="imageName"></img>
        </div>

        {/* <div className=" list-item list-img">
					<img
						src={image3}
						alt=""
						onClick={(e) => {
							dispatch(
								setCurrentData({
									currentPage: currentPage + 2,
									currentStep: 0,
									currentRecord: [],
									prevRecord: [],
									isLoading: true,
								})
							);
						}}
					></img>
				</div> */}
      </div>
      <img
        className="icon-next"
        alt=""
        src={prevImage}
        onClick={(e) => {
          handleClickImage(
            dispatch(
              setCurrentData({
                currentPage: 8,
                currentStep: 0,
                currentRecord: [],
                prevRecord: [],
                isLoading: true,
              })
            ),
            0
          );
        }}
      ></img>
    </div>
  );
}

export default MyNameKids;
