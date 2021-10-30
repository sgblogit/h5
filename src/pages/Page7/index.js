import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import Question from "components/Question/index";
import { handleClickImage, runRecord } from "helper/appServices";

const Page7 = (props) => {
  const { onPushAction } = props;

  const { currentPage, currentStep, currentRecord } = useSelector(
    (state) => state.app
  );

  const { playAudio } = audioPlayer;

  const clickEventName = "page7";

  const clickHandler = (e, op) => {
    onPushAction(e, op.actionType, op);
  };

  const [teacher, setTeacher] = useState(images.page5.teacherPage5);
  const [acctiveDisplay, setAcctiveDisplay] = useState(false);
  let teacherGif = images.page5.teacherGifPage5;

  useEffect(() => {
    setTimeout(() => {
		setTeacher(images.page5.teacherPage5)
	}, 3000);
    const values = runRecord({
      eventName: clickEventName,
      callbacks: {
        teacherGif: setTeacher,
        acctiveDisplay: setAcctiveDisplay,
      },
    });
    console.log(values, "values");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRecord]);

  console.log("render page7");
  return (
    <div className="page7">
      {/* <h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page7",
						eventData: {
							page: 2,
							step: 0,
						},
					});
				}}
			>
				go to page 2
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page7",
						eventData: {
							playAudio: "gitAudio",
							active: false,
						},
					});
				}}
			>
				play audio
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page7",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button> */}
      <div className="page-wrraper">
        <button
          className="control-right-7"
          onClick={(e) => {
            handleClickImage(
              clickHandler,
              {
                event: e,
                data: {
                  actionType: "fireEvent",
                  eventName: "page7",
                  eventData: {
                    playAudio: "audioPage7",
                    active: true,
					teacherGif: teacherGif,
                    acctiveDisplay: true,
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
        <Question
          teacherImg={teacher}
          teacherText={images.page7.textPage7}
          audioTeacher="audioPage7"
          page="page7"
          clickHandler={clickHandler}
          acctiveDisplay={acctiveDisplay}
        />
      </div>
    </div>
  );
};

export default React.memo(Page7);
