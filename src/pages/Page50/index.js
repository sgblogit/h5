import images from "assets/images/index";
import ScreenMiddleTitle from "components/ScreenMiddleTitle/index";
import TitleMeeting from "components/TitleMeetting/index";
import React from "react";
import "./styles.scss";

const Page50 = (props) => {
	return (
		<div
			className="page50-wrapper"
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
			<TitleMeeting bgTitle={images.page50.titleGamePage50} />
			<div className="page50-content">
				<div className="page50-content__row1 ">
					<div className="page50-content__row1--item">
						<img src={images.page50.meoPage50} alt="" />
					</div>
					<div className="page50-content__row1--item">
						<img src={images.page50.taoPage50} alt="" />
					</div>
					<div className="page50-content__row1--item">
						<img src={images.page50.page50Seven} alt="" />
					</div>
				</div>
				<div className="page50-content__row2 ">
					<div className="page50-content__row2--item">
						<img src={images.page50.comPage50} alt="" />
					</div>
					<div className="page50-content__row2--item">
						<img src={images.page50.childPage50} alt="" />
					</div>
				</div>
				<div className="page50-content__row3">
					<img src={images.page50.startPage50} alt="" />
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page50);
