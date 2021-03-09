import React from 'react';
import './LandingPage.css';
import Description from '../description/Description'
const LandingPage: React.FunctionComponent = () => {
    return (
            <div className="landing-content">
                <Description></Description>
            </div>
    )
};

export default LandingPage;