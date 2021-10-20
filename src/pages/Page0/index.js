import React from "react";
import images from "assets/images/index";
import "./styles.scss";
import ButtonBackgroundMusic from "components/ButtonBackgroundMusic/index";
import { useSelector } from "react-redux";

const Home = (props) => {
	const { onPushAction } = props;

	const {
		currentPage,
		currentStep,
		currentRecord,
		prevRecord,
	} = useSelector((state) => state.app);

	const imgClickEventName = 'home'

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op)
	}
	console.log('render page0')
	return (
		<div className="page0">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page0',
						eventData: {
							page:1,
							step:0
						}
					})
				}}
			>go to page 1</button>
			<ButtonBackgroundMusic
				audioName={'backgroundAudio'}
				onPushAction={onPushAction}
				autoPlay={true}
			/>
		</div>
	);
};

export default React.memo(Home);
