import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import images from "assets/images/index";
import {PAGE_DATA} from '../../constants/app'

import "./styles.scss";

const Page2 = (props) => {
	const {onPushAction } = props;

	const {
        currentPage,
        currentStep,
        currentRecord,
        prevRecord
    } = useSelector((state) => state.app);

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op)
	}

	const stepData = PAGE_DATA[currentPage][currentStep];

	console.log('render page2')
	return (
		<div className="page2">
			<h1>this is page {currentPage}</h1>
			<h2>step name:{stepData.stepName}</h2>
			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page2',
						eventData: {
							page:2,
							step:0
						}
					})
				}}
			>go to step 0</button>

			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page2',
						eventData: {
							page:2,
							step:1
						}
					})
				}}
			>go to step 1</button>

			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page2',
						eventData: {
							page:2,
							step:2
						}
					})
				}}
			>go to step 2</button>

			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page2',
						eventData: {
							page:0,
							step:0
						}
					})
				}}
			>go to page 0</button>
		</div>
	);
};

export default React.memo(Page2);
