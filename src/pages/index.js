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
import Page27 from "./Page27";
import Page28 from "./Page28";
import Page29 from "./Page29";
import Page30 from "./Page30";
import Page31 from "./Page31";
import Page32 from "./Page32";
import Page33 from "./Page33";
import Page34 from "./Page34";
import Page35 from "./Page35";
import Page36 from "./Page36";
import Page37 from "./Page37";
import Page38 from "./Page38";
import Page39 from "./Page39";
import Page40 from "./Page40";
import Page41 from "./Page41";
import Page42 from "./Page42";
import Page43 from "./Page43";
import Page44 from "./Page44";
import Page81 from "./Page8/components/Component1";

import images from "assets/images/index";
import "./styles.scss";

const Pages = (props) => {
	const { onPushAction, isShowWarning } = props;

	const { currentPage, currentStep } = useSelector((state) => state.app);

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
			switch (currentStep) {
				case 0:
					Page = <Page8 onPushAction={onPushAction} />;
					break;
				case 1:
					Page = <Page81 onPushAction={onPushAction} />;
					break;
				default:
					break;
			}
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
		case 27:
			Page = <Page27 onPushAction={onPushAction} />;
			break;
		case 28:
			Page = <Page28 onPushAction={onPushAction} />;
			break;
		case 29:
			Page = <Page29 onPushAction={onPushAction} />;
			break;
		case 30:
			Page = <Page30 onPushAction={onPushAction} />;
			break;
		case 31:
			Page = <Page31 onPushAction={onPushAction} />;
			break;
		case 32:
			Page = <Page32 onPushAction={onPushAction} />;
			break;
		case 33:
			Page = <Page33 onPushAction={onPushAction} />;
			break;
		case 34:
			Page = <Page34 onPushAction={onPushAction} />;
			break;
		case 35:
			Page = <Page35 onPushAction={onPushAction} />;
			break;
		case 36:
			Page = <Page36 onPushAction={onPushAction} />;
			break;
		case 37:
			Page = <Page37 onPushAction={onPushAction} />;
			break;
		case 38:
			Page = <Page38 onPushAction={onPushAction} />;
			break;
		case 39:
			Page = <Page39 onPushAction={onPushAction} />;
			break;
		case 40:
			Page = <Page40 onPushAction={onPushAction} />;
			break;
		case 41:
			Page = <Page41 onPushAction={onPushAction} />;
			break;
		case 42:
			Page = <Page42 onPushAction={onPushAction} />;
			break;
		case 43:
			Page = <Page43 onPushAction={onPushAction} />;
			break;
		case 44:
			Page = <Page44 onPushAction={onPushAction} />;
			break;

		default:
			break;
	}

	return (
		<div
			className={`page-content page${currentPage}`}
			style={{ backgroundImage: `url(${images.background[currentPage]})` }}
		>
			<Container>
				{Page}
				{/* {isShowWarning ? (
					<div
						style={{
							backgroundColor: "red",
							display: "flex",
							width: "100%",
							height: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<span> Invalid action</span>
					</div>
				) : null} */}
			</Container>
		</div>
	);
};

export default Pages;
