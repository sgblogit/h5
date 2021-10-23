import React from "react";
import images from "assets/images/index";
import "./styles.scss";
import { useSelector } from "react-redux";
import ButtonControlAudio from "components/ButtonControlAudio/index";

const Home = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const imgClickEventName = "home";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	return (
		<div className="page0">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page0",
						eventData: {
							page: 1,
							step: 0,
						},
					});
				}}
			>
				go to page 1
			</button>
			<ButtonControlAudio
				audioName={"backgroundAudio"}
				onPushAction={onPushAction}
				autoPlay={false}
			/>
		</div>
	);
};

export default React.memo(Home);
