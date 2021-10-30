import React from "react";
import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
const Page47 = (props) => {
	return (
		<div
			className="page47-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center", marginTop: "40px" }
			}
		>
			<TitleMeeting bgTitle={images.common.title} />
			<div className="page47-content">
				<div className="page47-content__question">
					<div className="page47-content__question--child">
						<img src={images.page47.child} alt="" />
					</div>
					<div className="page47-content__question--question">
						<img src={images.page47.questionPage47} alt="" />
					</div>
					<div className="page47-content__result">
						<div className="page47-content__result--item">
							<img src={images.page47.one} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.two} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.three} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.four} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.five} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.six} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.seven} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.eight} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.nine} alt="" />
						</div>
						<div className="page47-content__result--item">
							<img src={images.page47.ten} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page47);
