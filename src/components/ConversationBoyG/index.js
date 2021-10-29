import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import { handleClickImage } from 'helper/appServices';
import images from 'assets/images/index';
ConversationBoyG.propTypes = {
    
};

function ConversationBoyG(props) {
    const {
		textKid,
        iconKids,
        clickHandler,
        classCenter,
        activeRing,
        audio,
        page,
        childGIF
	} = props;
    return (
        <div className="custom-page">
            <button className="controllCus"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: page,
									eventData: {
										playAudio: audio,
										active: true,
										activeRing : true,
                                        childGIF : childGIF
									},
								},
							},
							0
						);
						
					}}
				>
					<img src={images.common.Button} alt="">
					</img>
				</button>
            <div className={`main ${activeRing ? "activeRing" : ""} `}>
                <div className={`pageCus-left ${ classCenter ? "center" : ""} `}>
					<img src={textKid} alt=""></img>
				</div>
                <div className="pageCus-middle">
                        <img src={iconKids} alt=""></img>
                </div>
            </div>		
		</div>
    );
}

export default ConversationBoyG;