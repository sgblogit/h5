import React, { useState } from "react";
function Family(props) {
  const {
    brotherGif,
    dadGif,
    momGif,
    clickHandler,
    meGif,
    audioMe,
    audioBrother,
    audioMom,
    audioDad,
    page,
    people,
    dadImg,
    momImg,
    brotherImg,
    meImg
  } = props;
  const [img1, setImageDad] = useState(dadGif);
  const [img2, setImageMom] = useState(momGif);
  const [img3, setImageBrother] = useState(brotherGif);
  const [img4, setImageMe] = useState(meGif);

  return (
    <div className="main-content">
      <div className="list-item">
        <div className="grid-item">
          <div className="dad item">
            <img
              src={img1}
              alt={img1}
              onClick={(e) => {
                setImageDad(dadImg);
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audioDad,
                    active: true,
                  },
                });
              }}
            />
          </div>
          <div className="mom item">
            <img
              src={img2}
              alt={img2}
              onClick={(e) => {
                setImageMom(momImg);
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audioMom,
                    active: true,
                  },
                });
              }}
            />
          </div>
          <div className="brother item">
            <img
              src={img3}
              alt={img3}
              onClick={(e) => {
                setImageBrother(brotherImg);
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audioBrother,
                    active: true,
                  },
                });
              }}
            />
          </div>
          <div className="me item">
            <img
              src={img4}
              alt={img4}
              onClick={(e) => {
                setImageMe(meImg);
                clickHandler(e, {
                  actionType: "fireEvent",
                  eventName: page,
                  eventData: {
                    playAudio: audioMe,
                    active: true,
                  },
                });
              }}
            />
          </div>
        </div>
        <div className="ppl-wrap">
          <img src={people} alt={people} />
        </div>
      </div>
    </div>
  );
}

export default Family;
