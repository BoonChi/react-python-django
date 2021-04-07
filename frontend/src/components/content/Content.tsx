import React, { useState,useEffect } from 'react';
import BrandImage from '../../assets/graphics/brand1.png'
import HeaderNavbar from '../navbar/Navbar'
import Api from '../../api'
import './Content.css'
import { IUserData, IErrorObject } from "../../react-interface"

const Content: React.FunctionComponent = () => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false,)
    const [email, setEmail] = useState("")
    const [authTitle, setAuthTitle] = useState("Login")
    const [authUrl, setAuthUrl] = useState("/login")
    const [error, setError] = useState<IErrorObject>({})
    const [showLogInForm, setShowLogInForm] = useState(true)
    const [showSignUpForm, setShowSignUpForm] = useState(false)
    const display_form = (formType: string) => {
      if(formType === 'login') {
        setShowLogInForm(true)
        setShowSignUpForm(false)
      }else if(formType === 'signup') {
        setShowSignUpForm(true)
        setShowLogInForm(false)
      }else {
        setShowSignUpForm(false)
        setShowLogInForm(false)
      }
    }
    const navbarItems = [
        {
            name: "Interest",
            url: "/interest"
    
        },
        {
            name: authTitle,
            url: authUrl
    
        },
        {
            name: email,
            url: ""
        }
    ]
    const [collapsed, setCollapsed] = useState(true);

    const handle_login = (userData: IUserData) => {
        console.log("enter here!!!!!")
        Api.post(`token-auth/`, userData)
          .then(res => {
              console.log(res)
              setEmail(res.data.user.email)
              setLoggedIn(true)
              setAuthTitle("Logout")
              setAuthUrl('/')
              setShowLogInForm(false)
              localStorage.setItem('token',res.data.token)
          }).catch(error => {
              if(error.response) {
                  setError(error.response.data)
                  setShowLogInForm(true)
              }
            })
      }
  
      const handle_signup = (userData: IUserData) => {
        Api.post(`authentication/users/`, userData)
        .then(res => {
            setEmail(res.data.email)
            setLoggedIn(true)
            setAuthTitle("Logout")
            setAuthUrl('/')
            setShowSignUpForm(false)
            localStorage.setItem('token',res.data.token)
        }).catch(error => {
            if(error.response) {
                setError(error.response.data)
                setShowSignUpForm(true)
            }
        })
      }

    const handle_logout = () => {
        console.log('LOGOUT!!!')
        localStorage.removeItem('token');
        setEmail("")
        setLoggedIn(false)
        setAuthTitle("Login")
        setAuthUrl('/login')
        setShowLogInForm(true)
        clearError()
    }

    const clearError = () => {
        setError({})
    }

    // useEffect(() => {
    //     if (loggedIn) {
    //         Api.get('blog/current_user/', {
    //             headers: {
    //             Authorization: `JWT ${localStorage.getItem('token')}`
    //             }
    //         }).then(res => setEmail(res.data.email))
    //     }
    // }, [loggedIn,email]);
    return (
        <div>
            <div className='content-div'>
                <HeaderNavbar toggleNavbar={() => setCollapsed(!collapsed)} collapsed={collapsed} brandImage={BrandImage} color={"fade"} brand={"Hum Boon Chi"} item={navbarItems}
                handle_signup={handle_signup} handle_login={handle_login} handle_logout={handle_logout} email={email} showLogInForm={showLogInForm} showSignUpForm={showSignUpForm} display_form={display_form} error={error} clearError={clearError}></HeaderNavbar>
            </div>
        </div>
        
        
    )

};

export default Content;