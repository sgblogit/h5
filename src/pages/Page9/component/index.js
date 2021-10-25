import React from "react";
function Family(props) {
	const {
		brotherGif,
		dadGif,
		momGif,
		clickHandler,
		meGif,
		audioMe,
		audioBrother,
		audioMom,
		audioDad,
		page,
		people,
		img1,
		img2,
		img3,
		img4,
	} = props;

	return (
		<div className="main-content">
			<div className="list-item">
				<div className="grid-item">
					<div className="dad item">
						<img
							src={img1}
							alt={img1}
							onClick={(e) => {
								clickHandler(e, {
									actionType: "fireEvent",
									eventName: page,
									eventData: {
										playAudio: audioDad,
										active: true,
										imgT1: dadGif,
									},
								});
							}}
						/>
					</div>
					<div className="mom item">
						<img
							src={img2}
							alt={img2}
							onClick={(e) => {
								clickHandler(e, {
									actionType: "fireEvent",
									eventName: page,
									eventData: {
										playAudio: audioMom,
										active: true,
										imgT2: momGif,
									},
								});
							}}
						/>
					</div>
					<div className="brother item">
						<img
							src={img3}
							alt={img3}
							onClick={(e) => {
								clickHandler(e, {
									actionType: "fireEvent",
									eventName: page,
									eventData: {
										playAudio: audioBrother,
										active: true,
										imgT3: brotherGif,
									},
								});
							}}
						/>
					</div>
					<div className="me item">
						<img
							src={img4}
							alt={img4}
							onClick={(e) => {
								clickHandler(e, {
									actionType: "fireEvent",
									eventName: page,
									eventData: {
										playAudio: audioMe,
										active: true,
										imgT4: meGif,
									},
								});
							}}
						/>
					</div>
				</div>
				<div className="ppl-wrap">
					<img src={people} alt={people} />
				</div>
			</div>
		</div>
	);
}

export default Family;
