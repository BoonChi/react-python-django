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
import basename from '../../react-env'
import { NavbarProps } from "../../react-interface"

const HeaderNavbar: React.FunctionComponent<NavbarProps> = (props) => {
    return (
        <Router basename={basename}>
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
            <Switch>
                    <Route exact path="/" component={LandingPage}/>   
                    {/* <Route exact path="/aboutMe" component={AboutMe} /> */}
                    <Route exact path="/interest"  component={Interest} />
                    {/* <Route exact path="/contact"  component={Contact} /> */}
                    <Route exact path="/login" render={() => <LoginForm handle_signup={props.handle_signup} handle_login={props.handle_login} email={props.email} showLogInForm={props.showLogInForm} showSignUpForm={props.showSignUpForm} display_form={props.display_form} clearError={props.clearError} error={props.error}></LoginForm>}/>
                </Switch>
        </Router>
    )

};

export default HeaderNavbar;