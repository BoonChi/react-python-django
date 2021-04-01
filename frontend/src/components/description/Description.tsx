import React from 'react';
import './Description.css'
import Penguin from '../penguin/Penguin'
const Description: React.FunctionComponent = () => {
    return (
        <div>
            <div className="card-desc-title">
                <strong>REACT DEVELOPER</strong>
            </div>
            <Penguin></Penguin>
            {/* <hr className='hr-style'></hr> */}
            <div className="card-content">
                <div className="card-content-item">Develop <strong>React</strong> framework APP with <strong>Python Django Framework</strong> and <strong>PostgreSQL</strong></div>
                <div className="card-content-item">Develop <strong>React</strong> APP with <strong>NodeJs</strong> and <strong>mongoDB</strong></div>
                <div className="card-content-item">Develop <strong>PHP SLIM</strong> framework APP with <strong>jQuery</strong> and <strong>MySql</strong></div>
                {/* <div className="card-link">
                    <a className="card-link-item" href='abc'>Github</a>
                    <a className="card-link-item" href='def'>Twitter</a>
                </div> */}
            </div>
        </div>
    )
};

export default Description;