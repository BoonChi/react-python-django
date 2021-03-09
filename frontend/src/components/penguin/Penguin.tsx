import React from 'react';
import './Penguin.css'
const Penguin: React.FunctionComponent = () => {
    return (
        <div className='penguin'>
            <div className='penguin-top'>            
                <div className='beak'>
                    <div className='upper-beak'></div>
                    <div className='lower-beak'></div>
                    <div className='left-blush'></div>
                    <div className='right-blush'></div>
                </div>
            </div>
            <div className='penguin-bottom'>
                <div className='left-hand'></div>
                <div className='right-hand'></div>
                <div className='feet left-feet'></div>
                <div className='feet right-feet'></div>
            </div>
            <div className='penguin-left-cheek'></div>
            <div className='penguin-right-cheek'></div>
            <div className='penguin-left-eye'>
                <div className='sparkle'></div>
            </div>
            <div className='penguin-right-eye'>
                <div className='sparkle'></div>
            </div>
            <div className='penguin-belly'>
            </div>
        </div>
    )
};

export default Penguin;