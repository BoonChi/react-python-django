import React, { useState, useEffect } from 'react';
import './AuthForm.css';
import SignupForm from '../form/SignupForm'
interface IUserData {  
    username?: string;  
    password?: string;
    first_name?: string;
    last_name?: string;
}  

interface IloginIn {  
    handle_login  : (userData: IUserData) => void;
    handle_signup : (userData: IUserData) => void;
    username : string;
    showLogInForm : boolean;
    showSignUpForm : boolean;
    display_form : (formType: string) => void
} 

const LoginForm = (props:IloginIn) => {
    const submitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };
        const username = target.username.value; // typechecks!
        const password = target.password.value; // typechecks!

        const user = {
            username : username,
            password : password,
        }
        props.handle_login(user)
    }
    return (
        <div>
            { props.showLogInForm && !props.showSignUpForm && 
                <div className='auth-title'>
                    <h1>LOGIN</h1>
                    <form onSubmit={submitForm}>
                        <div className="auth-input-field">
                            <div><label>Username</label></div>
                            <input type="text" name="username"/>
                        </div>
                        <div className="auth-input-field">
                            <div><label>Password</label></div>
                            <input type="password" name="password"/>
                        </div>
                        <div className="auth-buttons">
                            <input className="auth-button" type="submit" value="SUBMIT"/>
                            <input className="auth-button" type="button" value="SIGNUP" onClick={()=>props.display_form("signup")}/>
                        </div>
                    </form>
                </div>
                }
                { props.showSignUpForm && !props.showLogInForm && 
                <div className='auth-title'>
                    <h1>REGISTRATION</h1>
                    <SignupForm handle_signup={props.handle_signup} display_form={props.display_form}></SignupForm>
                </div>
            }
        </div>
    )
}
export default LoginForm