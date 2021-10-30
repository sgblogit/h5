import images from "assets/images/index";
import TitleMeeting from "components/TitleMeetting/index";
import React from "react";
import "./styles.scss";

const Page49 = (props) => {
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
				<div className="control-page49-wrapper">
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
		</div>
	);
};

export default React.memo(Page49);
