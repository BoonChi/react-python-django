import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AboutMe from '../aboutMe/AboutMe'
import Interest from '../interest/Interest'
import Contact from '../contact/Contact'
import LandingPage from '../landingPage/LandingPage'
import LoginForm from '../form/LoginForm';
interface NavbarItem {
    name: string,
    url: string
}
interface IUserData {  
    username?: string;  
    password?: string;
    first_name?: string;
    last_name?: string;
} 

interface IErrorObject {
    [key: string] : string
}
interface NavbarProps {
    brandImage: string
    brand: string
    item : NavbarItem[]
    color: string
    collapsed : Boolean
    toggleNavbar : () => void
    handle_login  : (userData: IUserData) => void;
    handle_signup : (userData: IUserData) => void;
    handle_logout : () => void;
    username : string;
    showLogInForm : boolean;
    showSignUpForm : boolean;
    display_form : (formType: string) => void;
    error : IErrorObject;
}
const HeaderNavbar: React.FunctionComponent<NavbarProps> = (props) => {
    return (
        <Router>
            <div className='header-navbar'>
                <Navbar className="bg-color" color={props.color} light expand="md" fixed='top'>
                    <div>
                        <Link to="/" className="mr-auto customized-navbar">
                            <strong className="brandName">{props.brand}</strong>
                        </Link>
                        <div>
                            <a href="https://www.youtube.com/watch?v=nXEP5wzLzbk&list=PLxVSINsFzaPqf0uidTwoPCdMSG1XLAC_c" target="_blank">
                                <FontAwesomeIcon className="mr-3 icon-color" icon={faTwitter}></FontAwesomeIcon>
                            </a>
                            <a href="https://www.youtube.com/watch?v=d_V0C0R-iKo" target="_blank">
                                <FontAwesomeIcon className=" mr-3 icon-color" icon={faInstagram}></FontAwesomeIcon>
                            </a>
                            <a href="https://www.youtube.com/watch?v=NO02JTjuUio&list=PLxVSINsFzaPr8mkt32OznwQZKXARYbitC" target="_blank">
                                <FontAwesomeIcon className=" mr-3 icon-color" icon={faLinkedinIn}></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>

                    <NavbarToggler onClick={props.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!props.collapsed} navbar>
                        <Nav navbar className="ml-auto">
                        {props.item.map((each) => {
                            // each.name && each.name != 'Logout' &&
                            // <Link key={each.url} className="mr-3 font-color" to={each.url}>{each.name}</Link>
                            if(each.name && each.name != 'Logout') {
                                return <Link key={each.url} className="mr-3 font-color" to={each.url}>{each.name}</Link>
                            }else if(each.name && each.name == 'Logout') {
                                return <Link key={each.url} className="mr-3 font-color" onClick={props.handle_logout} to={each.url}>{each.name}</Link>
                            }
                        })}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            {props.username && <div className="response-text" style={{marginTop:"10%"}}><h1>Welcome Back {props.username}</h1></div>}
            { props.showLogInForm && props.error && 
            <div className="response-text warning-text" style={{marginTop:"10%"}}>
                {
                    Object.keys(props.error).map((key,i) => (
                        <div key={i}>
                            <p>Error Key: {key}</p>
                            <p>Error Message: {props.error[key]}</p>
                        </div>
                    ))
                }    
            </div>}
            <Switch>
                    <Route exact path="/" component={LandingPage} />   
                    {/* <Route exact path="/aboutMe" component={AboutMe} /> */}
                    <Route exact path="/interest"  component={Interest} />
                    {/* <Route exact path="/contact"  component={Contact} /> */}
                    <Route exact path="/login" render={() => <LoginForm handle_signup={props.handle_signup} handle_login={props.handle_login} username={props.username} showLogInForm={props.showLogInForm} showSignUpForm={props.showSignUpForm} display_form={props.display_form}></LoginForm>}/>
                </Switch>
        </Router>
    )

};

export default HeaderNavbar;