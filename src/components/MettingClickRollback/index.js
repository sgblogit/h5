import React from "react";

import images from "assets/images/index";
import "./styles.scss";
import { handleClickImage } from "helper/appServices";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentData } from "redux/currentData";
MettingClickRollback.propTypes = {};


function MettingClickRollback(props) {
	const {
		image1,
		image2,
		image3,
		image4,
		nextImage,
		currentPage
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
		<div className="session-main">
			<div className="session-main-list">
				<div className=" list-item list-img">
					<img
						src={image1}
						alt=""
						onClick={(e) => {
							handleClickImage(
								dispatch(
									setCurrentData({
										currentStep: 1,

										isLoading: false,
									})
								),
								0
							);
						}}
						
					></img>
				</div>
				
				<div className=" list-item list-img">
					<img
						src={image3}
						alt=""
						onClick={(e) => {
							handleClickImage(
								dispatch(
									setCurrentData({
										currentStep: 2,
										isLoading: false,
									})
								),
								0
							);
						}}
					></img>
				</div>
				<div className=" list-item list-img">
					<img
						src={image2}
						alt=""
						onClick={(e) => {
							handleClickImage(
								dispatch(
									setCurrentData({
										currentStep: 4,
										isLoading: false,
									})
								),
								0
							);
						}}
						
					></img>
				</div>
				<div className=" list-item list-img">
					<img
						src={image4}
						alt=""
						onClick={(e) => {
							handleClickImage(
								dispatch(
									setCurrentData({
										currentStep: 3,
										isLoading: false,
									})
								),
								0
							);
						}}
						
					></img>

				</div>
				
				
				
			</div>
			
		</div>
	);
}

export default MettingClickRollback;
