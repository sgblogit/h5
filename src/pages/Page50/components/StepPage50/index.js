import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import React from "react";
import "./styles.scss";

const StepPage50 = (props) => {
	const { urlQuestion, urlAnswerA, urlAnswerB, urlAnswerC, urlAnswerD } = props;
	return (
		<div
			className="step"
			style={
				window.innerWidth < window.innerHeight
					? {
							alignItems: "flex-end",
					  }
					: {
							alignItems: "center",
							marginTop: "40px",
					  }
			}
		>
			<TitleMeeting bgTitle={images.page50.titleStep} />
			<div className="step-content">
				<div className="step-content__question">
					<img src={urlQuestion} alt="" />
				</div>
				<div className="step-content__answer">
					<div className="step-content__answer--item">
						<img src={urlAnswerA} alt="" />
					</div>
					<div className="step-content__answer--item">
						<img src={urlAnswerB} alt="" />
					</div>
					<div className="step-content__answer--item">
						<img src={urlAnswerC} alt="" />
					</div>
					<div className="step-content__answer--item">
						<img src={urlAnswerD} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(StepPage50);
