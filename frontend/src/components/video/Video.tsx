import React from 'react';
import './Video.css'
import Moon from '../moon/Moon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
const Video: React.FunctionComponent = () => {
    return (
        <div className='video-page'>
            <div className='hobby'>
                <FontAwesomeIcon className="mr-3 icon-color" icon={faYoutube}></FontAwesomeIcon>YouTube creator <a href='https://www.youtube.com/channel/UCC64GC8w0_3E4wC1NPP7qAA/featured'>@chiXDawid</a>
            </div>
            <Moon></Moon>
            <div className='hobby-desc'>
                <p>I found tons of fun in <strong>video editing and filming.</strong></p>
                <p>Feel free to checkout my channel! <a href='https://www.youtube.com/channel/UCC64GC8w0_3E4wC1NPP7qAA/featured'>Click here</a></p>
            </div>
            <iframe src="https://www.youtube.com/embed/d_V0C0R-iKo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )

};

export default Video;