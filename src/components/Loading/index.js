import React from "react";
import "./styles.scss";
import images from "assets/images";

const Loading = (props) => {
	return (
		<div className="loading">
			<div className="loading__content">
				<img src={images.loading[0]} alt="" />
			</div>
		</div>
	);
};

export default React.memo(Loading);
