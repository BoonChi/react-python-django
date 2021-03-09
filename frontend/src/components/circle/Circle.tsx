import React from 'react';
import "./Circle.css"
import Image from "../../assets/graphics/demo.jpg"
interface CircleProps {
    numberOfCircle: number
}

const Circle: React.FunctionComponent<CircleProps> = (props) => {
    return (
        <div>
            <div className="rectangle"></div>
            <div className="square"></div>
            <div className="circle"></div>
            <div className="triangle"></div>
            <div className="inverted-triangle"></div>
            <div className="circle-wrap-text">            
                <img src={Image} alt="test1"/>
                <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin.</p>
            </div>
        </div>
    )

};

export default Circle;