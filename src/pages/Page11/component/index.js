import React from "react";
import "./styles.scss";
function Favorites(props) {
	const {
		cake,
		pasta,
		candy,
		egg,
		page,
		kidGif,
		teacherGif,
		text,
		clickHandler,
		audioTeacher,
		audioKid,
		className,
		teacher,
		kid,
		textT1,
		active2,
	} = props;

	return (
		<div className="session-main-page11">
			<div className="session-main-page11-list">
				<div className="teacher-wrapper">
					<div className="teacher">
						<img
							className="imgTeacher"
							src={teacher}
							onClick={(e) => {
								clickHandler(e, {
									actionType: "fireEvent",
									eventName: page,
									eventData: {
										playAudio: audioTeacher,
										active: true,
										teacherGif: teacherGif,
										textT1Active: "active",
									},
								});
							}}
							alt=""
						></img>

						{text && (
							<div
								className={`text-teacher ${className ? className : ""}  ${
									textT1 ? textT1 : ""
								}  `}
							>
								<img src={text} alt=""></img>
							</div>
						)}
					</div>
				</div>
				<div className={`list-item hidden  ${active2 ? active2 : ""}  `}>
					<div className="item cake">
						<img src={cake} alt={cake} />
					</div>
					<div className="item egg">
						<img src={egg} alt={egg} />
					</div>
					<div className="item pasta">
						<img src={pasta} alt={pasta} />
					</div>
					<div className="item candy">
						<img src={candy} alt={candy} />
					</div>
				</div>
				<div className="kid-wrapper">
					<img
						src={kid}
						alt={kid}
						onClick={(e) => {
							clickHandler(e, {
								actionType: "fireEvent",
								eventName: page,
								eventData: {
									playAudio: audioKid,
									active: true,
									kidGif: kidGif,
									active2: "active2",
								},
							});
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Favorites;
