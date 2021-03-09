import React from 'react';
import './Moon.css'
const Moon: React.FunctionComponent = () => {
    return (
        <div className="moon">
            <div className="moon-circle">
                <div className="eyes left-eye">
                    <div className="eye-ball">
                        <div className="eye-spark"></div>
                    </div>
                </div>
                <div className="eyes right-eye">
                    <div className="eye-ball right-eye-ball">
                        <div className="eye-spark"></div>
                    </div>
                </div>
                <div className="mouth">
                    {/* <div className="teeth"></div> */}
                    <div className="teeth left-teeth"></div>
                    <div className="teeth right-teeth"></div>
                </div>
                <div className="moon-bottom">
                    <div className="shoes left-shoes"></div>
                    <div className="shoes right-shoes"></div>
                </div>
                <hr className='moon-divider'></hr>
            </div>
        </div>
    )

};

export default Moon;