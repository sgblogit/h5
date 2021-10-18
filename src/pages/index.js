import BackAndNextPage from "components/BackAndNextPage/index";
import React from "react";
import { useSelector } from "react-redux";
import Page0 from "./home/index2";
import Page1 from "./page_1/components/index";
import Page10 from "./page_10/index";
import Page11 from "./page_11/index";
import Page12 from "./page_12/index";
import Page2 from "./page_2/index";
import Page3 from "./page_3";
import Page4 from "./page_4";
import Page5 from "./page_5";
import Page6 from "./page_6/index";
import Page7 from "./page_7/index";
import Page8 from "./page_8/index";
import Page9 from "./page_9/index";
import Page14 from "./page_14/index";
import Page15 from "./page_15/index";
import Page16 from "./page_16/index";
import Page17 from "./page_17/index";
import Page18 from "./page_18/index";
import Page19 from "./page_19/index";
import Page20 from "./page_20/index";
import Page21 from "./page_21/index";
import Page22 from "./page_22/index";
import Page23 from "./page_23/index";
import Page13 from "./page_13/index";
import Page24 from "./page_24/index";
import Page25 from "./page_25/index";
import Page26 from "./page_26/index";
import Page27 from "./page_27/index";
import Page28 from "./page_28/index";
import Page29 from "./page_29/index";
import Page30 from "./page_30/index";

const Pages = (props) => {
	const { onPushAction, currentPage, audioPlaying } = props;

	const isShowNextIcon = useSelector((state) => state.app.isShowNextIcon);

	let Page;
	let valueCustomForPrevChangePage = null;
	let isDisableNextIcon = false;
	let valueCustomForNextChangePage = null;

	switch (currentPage) {
		case 0:
			Page = <Page0 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 1:
			Page = <Page1 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 2:
			Page = (
				<Page2
					currentPage={currentPage}
					onPushAction={onPushAction}
					audioPlaying={audioPlaying}
				/>
			);
			break;
		case 3:
			Page = <Page3 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 4:
			Page = <Page4 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 5:
			Page = (
				<Page5
					currentPage={currentPage}
					onPushAction={onPushAction}
					audioPlaying={audioPlaying}
				/>
			);
			break;
		case 6:
			Page = <Page6 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 7:
			Page = <Page7 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 8:
			Page = <Page8 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 9:
			Page = <Page9 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 10:
			Page = <Page11 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 11:
			Page = <Page12 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 12:
			Page = <Page13 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 13:
			Page = <Page14 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 14:
			Page = <Page15 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 15:
			Page = <Page16 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 16:
			Page = <Page17 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 17:
			Page = <Page18 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 18:
			Page = <Page19 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 19:
			Page = <Page20 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 20:
			Page = <Page21 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 21:
			Page = <Page22 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 22:
			Page = <Page23 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 23:
			Page = <Page24 currentPage={currentPage} onPushAction={onPushAction} />;
			break;
		case 24:
			Page = (
				<Page25
					currentPage={currentPage}
					onPushAction={onPushAction}
					audioPlaying={audioPlaying}
				/>
			);
			break;
		case 25:
			Page = (
				<Page27
					currentPage={currentPage}
					onPushAction={onPushAction}
					audioPlaying={audioPlaying}
				/>
			);
			break;
		case 26:
			isDisableNextIcon = true;
			Page = (
				<Page28
					currentPage={currentPage}
					onPushAction={onPushAction}
					audioPlaying={audioPlaying}
				/>
			);
			break;
		case 27:
			isDisableNextIcon = true;
			Page = (
				<Page29
					currentPage={currentPage}
					onPushAction={onPushAction}
					audioPlaying={audioPlaying}
				/>
			);
			break;
		case 28:
			Page = (
				<Page30
					currentPage={currentPage}
					onPushAction={onPushAction}
					audioPlaying={audioPlaying}
				/>
			);
			break;
		// case 29:
		// 	Page = (
		// 		<Page30
		// 			currentPage={currentPage}
		// 			onPushAction={onPushAction}
		// 			audioPlaying={audioPlaying}
		// 		/>
		// 	);
		// 	break;
		// case 30:
		// 	Page = (
		// 		<Page31
		// 			currentPage={currentPage}
		// 			onPushAction={onPushAction}
		// 			audioPlaying={audioPlaying}
		// 		/>
		// 	);
		// 	break;

		default:
			break;
	}

	return (
		<>
			{Page}
			<BackAndNextPage
				currentPage={currentPage}
				onClickChangePage={onPushAction}
				valueCustomForPrevPage={valueCustomForPrevChangePage}
				isDisableNextIcon={isDisableNextIcon}
				valueCustomForNextPage={valueCustomForNextChangePage}
			/>
		</>
	);
};

export default Pages;
