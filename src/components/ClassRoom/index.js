import React from "react";

import images from "assets/images/index";
import "./styles.scss";
import { handleClickImage } from "helper/appServices";
ClassRoom.propTypes = {};

function ClassRoom(props) {
	const {
		audioKid,
		kidImg,
		kidText,
		clickHandler,
		page,
	} = props;
	return (
		<div className="content-wrap">
			<div className="content-wrap-list">
				 <div className="kid-wrap">
						<img
							alt=""
							src={kidImg}
						/>
				 </div>
				 <div className="text-list">
					<div className="text-item">
					<img 
						 	alt=""
							src={kidText}
					 />
					</div>
					<div className="text-item">
					<img 
						 	alt=""
							src={kidText}
					 />
					</div>
					<div className="text-item">
					<img 
						 	alt=""
							src={kidText}
					 />
					</div>
					<div className="text-item">
					<img 
						 	alt=""
							src={kidText}
					 />
					</div>
				 </div>
			
			</div>
		</div>
	);
}

export default ClassRoom;
