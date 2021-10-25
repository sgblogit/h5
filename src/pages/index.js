import { useSelector } from "react-redux";
import Container from "components/Container/index";
import React from "react";
import Page0 from "./Page0";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Page11 from "./Page11";
import Page12 from "./Page12/index";
import Page13 from "./Page13/index";
import Page14 from "./Page14";
import Page15 from "./Page15/index";
import Page16 from "./Page16/";
import Page17 from "./Page17";
import Page18 from "./Page18";
import Page19 from "./Page19";
import Page20 from "./Page20";
import Page21 from "./Page21";
import Page22 from "./Page22";
import Page23 from "./Page23";
import Page24 from "./Page24";
import Page25 from "./Page25";
import Page26 from "./Page26";

import images from "assets/images/index";
import "./styles.scss";

const Pages = (props) => {
  const { onPushAction } = props;

  const { currentPage } = useSelector((state) => state.app);

  let Page;

  switch (currentPage) {
    case 0:
      Page = <Page0 onPushAction={onPushAction} />;
      break;
    case 1:
      Page = <Page1 onPushAction={onPushAction} />;
      break;
    case 2:
      Page = <Page2 onPushAction={onPushAction} />;
      break;
    case 3:
      Page = <Page3 onPushAction={onPushAction} />;
      break;
    case 4:
      Page = <Page4 onPushAction={onPushAction} />;
      break;
    case 5:
      Page = <Page5 onPushAction={onPushAction} />;
      break;
    case 6:
      Page = <Page6 onPushAction={onPushAction} />;
      break;
    case 7:
      Page = <Page7 onPushAction={onPushAction} />;
      break;
    case 8:
      Page = <Page8 onPushAction={onPushAction} />;
      break;
    case 9:
      Page = <Page9 onPushAction={onPushAction} />;
      break;
    case 10:
      Page = <Page10 onPushAction={onPushAction} />;
      break;
    case 11:
      Page = <Page11 onPushAction={onPushAction} />;
      break;
    case 12:
      Page = <Page12 onPushAction={onPushAction} />;
      break;
    case 13:
      Page = <Page13 onPushAction={onPushAction} />;
      break;
    case 14:
      Page = <Page14 onPushAction={onPushAction} />;
      break;
    case 15:
      Page = <Page15 onPushAction={onPushAction} />;
      break;
    case 16:
      Page = <Page16 onPushAction={onPushAction} />;
      break;
    case 17:
      Page = <Page17 onPushAction={onPushAction} />;
      break;
    case 18:
      Page = <Page18 onPushAction={onPushAction} />;
      break;
    case 19:
      Page = <Page19 onPushAction={onPushAction} />;
      break;
    case 20:
      Page = <Page20 onPushAction={onPushAction} />;
      break;
    case 21:
      Page = <Page21 onPushAction={onPushAction} />;
      break;
    case 22:
      Page = <Page22 onPushAction={onPushAction} />;
      break;
    case 23:
      Page = <Page23 onPushAction={onPushAction} />;
      break;
    case 24:
      Page = <Page24 onPushAction={onPushAction} />;
      break;
    case 25:
      Page = <Page25 onPushAction={onPushAction} />;
      break;
    case 26:
      Page = <Page26 onPushAction={onPushAction} />;
      break;

    default:
      break;
  }

  return (
    <div
      className={`page-content page${currentPage}`}
      style={{ backgroundImage: `url(${images.background[currentPage]})` }}
    >
      <Container>{Page}</Container>
    </div>
  );
};

export default Pages;
