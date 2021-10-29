import React from "react";
import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
const Page46 = (props) => {
	return (
		<div
			className="page46-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center", marginTop: "40px" }
			}
		>
			<TitleMeeting bgTitle={images.common.title} />
			<div className="page46-content">
				{/* <div className="page46-content__result">
					<div className="page46-content__result--item">
						<img src={images.page46.bo} alt="" />
					</div>
					<div className="page46-content__result--item">
						<img src={images.page46.cam} alt="" />
					</div>
					<div className="page46-content__result--item">
						<img src={images.page46.tao} alt="" />
					</div>
					<div className="page46-content__result--item">
						<img src={images.page46.chuoi} alt="" />
					</div>
				</div>
				<div className="page46-content__question">
					<div className="page46-content__question--child">
						<img src={images.page46.childPage46} alt="" />
					</div>
					<div className="page46-content__question--question">
						<img src={images.page46.question} alt="" />
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default React.memo(Page46);
