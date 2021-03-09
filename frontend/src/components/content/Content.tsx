import React, { useState } from 'react';
import BrandImage from '../../assets/graphics/brand1.png'
import HeaderNavbar from '../navbar/Navbar'
import './Content.css'

const Content: React.FunctionComponent = () => {
    const navbarItems = [
        {
            name: "About Me",
            url: "/aboutMe"
    
        },
        {
            name: "Interest",
            url: "/interest"
    
        },
        {
            name: "Contact",
            url: "/contact"
    
        },
    ]
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className='content-div'>
            <HeaderNavbar toggleNavbar={() => setCollapsed(!collapsed)}collapsed={collapsed} brandImage={BrandImage} color={"fade"} brand={"Hum Boon Chi"} item={navbarItems}></HeaderNavbar>
        </div>
    )

};

export default Content;