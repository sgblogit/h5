import React, { useState } from "react";
import "./styles.scss";
import images from "assets/images/index";
import ButtonMusicRight from "components/ButtonMusicRight/index";

const Page25 = (props) => {
	const { currentPage, audioPlaying } = props;

	const [isShowPlayButton, setIsShowPlayButton] = useState(true);

	const handleClickPause = () => {
		setIsShowPlayButton(false);
	};
	const handleClickPlay = () => {
		setIsShowPlayButton(true);
	};

	const buttonPage22 = [
		{ id: "paper", urlImage: images.icons.page22_paper },
		{ id: "paint", urlImage: images.icons.page22_paint },
		{ id: "scissor", urlImage: images.icons.page22_scissor },
		{ id: "glue", urlImage: images.icons.page22_glue },
	];

	const listButton = buttonPage22.map((item) => {
		return <img src={item.urlImage} alt={item.urlImage} />;
	});

	return (
		<div className="page25-wrapper">
			<ButtonMusicRight
				audioPlaying={audioPlaying}
				handleClickPause={handleClickPause}
				handleClickPlay={handleClickPlay}
				isShowPlayButton={isShowPlayButton}
			/>
			<div className="countdown-button">
				<img
					src={images.icons.page22_countdown}
					alt={images.icons.page22_countdown}
				/>
			</div>
			<div className="start-button">
				<img src={images.icons.page22_start} alt={images.icons.page22_start} />
			</div>
			<div className="answer-button">{listButton}</div>
		</div>
	);
};

export default React.memo(Page25);
