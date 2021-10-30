import React from "react";
import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
import ButtonControlAudio from "components/ButtonControlAudio/index";
const Page48 = (props) => {
	const { onPushAction } = props;
	return (
		<div
			className="page48-wrapper"
			style={
				window.innerWidth < window.innerHeight
					? { alignItems: "flex-end" }
					: { alignItems: "center", marginTop: "40px" }
			}
		>
			<TitleMeeting bgTitle={images.common.title} />
			<div className="page48-content">
				<div className="page48-content__question">
					<div className="page48-content__question--child">
						<img src={images.page48.childPage48} alt="" />
					</div>
					<div className="page48-content__question--question">
						<img src={images.page48.questionPage48} alt="" />
					</div>
					<div className="page48-content__result">
						<div className="page48-content__result--item">
							<img src={images.page48.textsPage48} alt="" />
						</div>
					</div>
				</div>
			</div>
			<ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"bgAudio15"}
				urlButtonPlay={images.common.play}
				urlButtonPause={images.common.Pauses}
			/>
		</div>
	);
};

export default React.memo(Page48);
