import React from "react";
import ButtonControlAudio from "components/ButtonControlAudio/index";
import "./styles.scss";

const ScreenMiddleTitle = (props) => {
	const { urlImgTitle } = props;
	return (
		<div className="screenMiddleTitle">
			<div className="screenMiddleTitle__imageTitle">
				<img src={urlImgTitle} alt="" />
			</div>
			{/* <ButtonControlAudio /> */}
		</div>
	);
};

export default React.memo(ScreenMiddleTitle);
