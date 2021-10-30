import images from "assets/images/index";
import ButtonControlAudio from "components/ButtonControlAudio/index";
import TitleMeeting from "components/TitleMeetting/index";
import { handleClickImage, runRecord } from "helper/appServices";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

const Page49 = (props) => {
	const { onPushAction } = props;
	const currentRecord = useSelector((state) => state.app.currentRecord);
	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	const clickEventName = "page48-click";

	useEffect(() => {
		runRecord({
			eventName: clickEventName,
			callbacks: {},
		});
	}, [currentRecord]);

	return (
		<div
			className="page49-wrapper"
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
			<TitleMeeting bgTitle={images.common.title} />
			<div
				className="page49-content"
				style={{
					backgroundImage: `url(${images.page49.questionBg})`,
					backgroundPosition: "left",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div
					className="control-page49-wrapper"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: "page48-click",
									eventData: {
										playAudio: "page49Voice",
									},
								},
							},
							0
						);
					}}
				>
					<div className="page49-content--item">
						<img src={images.page49.aPage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.bPage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.cPage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.dPage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.ePage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.fPage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.gPage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.hPage49} alt="" />
					</div>
					<div className="page49-content--item">
						<img src={images.page49.iPage49} alt="" />
					</div>
				</div>
			</div>
			<ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"page47AudioBg"}
				urlButtonPlay={images.common.play}
				urlButtonPause={images.common.Pauses}
				isLeft
			/>
		</div>
	);
};

export default React.memo(Page49);
