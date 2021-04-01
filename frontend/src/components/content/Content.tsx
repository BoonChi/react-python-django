import React, { useState,useEffect } from 'react';
import BrandImage from '../../assets/graphics/brand1.png'
import HeaderNavbar from '../navbar/Navbar'
import Api from '../../api'
import './Content.css'
interface IUserData {  
    username?: string;  
    password?: string;
    first_name?: string;
    last_name?: string;
} 
interface IErrorObject {
    [key: string] : string
}
const Content: React.FunctionComponent = () => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false,)
    const [username, setUsername] = useState("")
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
            name: username,
            url: ""
        }
    ]
    const [collapsed, setCollapsed] = useState(true);

    const handle_login = (userData: IUserData) => {
        console.log("enter here!!!!!")
        Api.post(`token-auth/`, userData)
          .then(res => {
              console.log(res)
              setUsername(res.data.user.username)
              setLoggedIn(true)
              setAuthTitle("Logout")
              setAuthUrl('/')
              setShowLogInForm(false)
              localStorage.setItem('token',res.data.token)
              return <h1>{username}</h1>
          }).catch(error => {
              if(error.response) {
                  setError(error.response.data)
                  setShowLogInForm(true)
              }
            })
      }
  
      const handle_signup = (userData: IUserData) => {
        Api.post(`blog/users/`, userData)
        .then(res => {
            setUsername(res.data.username)
            setLoggedIn(true)
            setAuthTitle("Logout")
            setAuthUrl('/')
            localStorage.setItem('token',res.data.token)
        })
        .catch(error => setError(error))
      }

    const handle_logout = () => {
        console.log('LOGOUT!!!')
        localStorage.removeItem('token');
        setUsername("")
        setLoggedIn(false)
        setAuthTitle("Login")
        setAuthUrl('/login')
    }

    // useEffect(() => {
    //     if (loggedIn) {
    //         Api.get('blog/current_user/', {
    //             headers: {
    //             Authorization: `JWT ${localStorage.getItem('token')}`
    //             }
    //         }).then(res => setUsername(res.data.username))
    //     }
    // }, [loggedIn,username]);
    return (
        <div>
            <div className='content-div'>
                <HeaderNavbar toggleNavbar={() => setCollapsed(!collapsed)} collapsed={collapsed} brandImage={BrandImage} color={"fade"} brand={"Hum Boon Chi"} item={navbarItems}
                handle_signup={handle_signup} handle_login={handle_login} handle_logout={handle_logout} username={username} showLogInForm={showLogInForm} showSignUpForm={showSignUpForm} display_form={display_form} error={error}></HeaderNavbar>
            </div>
        </div>
        
        
    )

};

export default Content;