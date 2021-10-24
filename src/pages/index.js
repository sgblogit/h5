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
import Page10 from "./Page10";

import Page17 from "./Page17";

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
		case 10:
			Page = <Page10 onPushAction={onPushAction} />;
			break;

    case 17:
      Page = <Page17 onPushAction={onPushAction} />;
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
