import React from "react";

import "./styles.scss";
ClassRoom.propTypes = {};

function ClassRoom(props) {
	const {
		kidImg,
		kidText,
		acctiveDisplay,
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
				 <div className={`text-list hidden  ${acctiveDisplay ? "active" : ""}  `}>
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
