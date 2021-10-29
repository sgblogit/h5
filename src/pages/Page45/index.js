import React from "react";
import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
const Page45 = (props) => {
	return (
		<div
			className="page45-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center", marginTop: "40px" }
			}
		>
			<TitleMeeting bgTitle={images.common.title} />
			<div className="page45-content">
				<div className="page45-content__result">
					<div className="page45-content__result--item">
						<img src={images.page45.bo} alt="" />
					</div>
					<div className="page45-content__result--item">
						<img src={images.page45.cam} alt="" />
					</div>
					<div className="page45-content__result--item">
						<img src={images.page45.tao} alt="" />
					</div>
					<div className="page45-content__result--item">
						<img src={images.page45.chuoi} alt="" />
					</div>
				</div>
				<div className="page45-content__question">
					<div className="page45-content__question--child">
						<img src={images.page45.childPage45} alt="" />
					</div>
					<div className="page45-content__question--question">
						<img src={images.page45.question} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page45);
