import React, { useState, useEffect, useRef } from "react";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page17 = (props) => {
  const { currentPage, onPushAction } = props;
  return(
    <PracticeFind
    eventName='page17'
    image1={images.page17.teacher17}
    image2={images.page17.girl17}
    object1={images.page17.teacher17}
    object2={images.page17.girl17}
    ball={images.page17.ball17}
    objectG1={images.page17.teacherGif17}
    objectG2={images.page17.girlGif17}
    text1={images.page17.question17}
    text2={images.page17.answer17}
    audio1 = 'thatRight'
    audio2 = 'it17'
    


    currentPage={currentPage}
    onPushAction={onPushAction}
    />
  )


};

export default React.memo(Page17);
