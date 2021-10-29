import React from "react";
import "./styles.scss";

const MultipleChoiceGame = (props) => {
	const { urlQuestion, answer01, answer02, answer03, answer04 } = props;
	return (
		<div className="multipleGame">
			<div className="question">
				<img src={urlQuestion} alt="" />
			</div>
			<div className="answer">
				<img src={answer01} alt="" />
				<img src={answer02} alt="" />
				<img src={answer03} alt="" />
				<img src={answer04} alt="" />
			</div>
		</div>
	);
};

export default React.memo(MultipleChoiceGame);
