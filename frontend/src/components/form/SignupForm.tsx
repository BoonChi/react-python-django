import React, { useState, useEffect } from 'react';
import "./AuthForm.css"
interface IUserData {  
    username?: string;  
    password?: string;
    first_name?: string;
    last_name?: string;
}  

interface ISignup {  
    handle_signup  : (userData: IUserData) => void;
    display_form : (formType:string) => void;
} 

const SignupForm = (props: ISignup) => {
    const submitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
            first_name : { value: string };
            last_name : { value: string };
        };
        const username = target.username.value; // typechecks!
        const password = target.password.value; // typechecks!
        const first_name = target.first_name.value; // typechecks!
        const last_name = target.last_name.value; // typechecks!
        const user = {
            username : username,
            password : password,
            first_name : first_name,
            last_name : last_name
        }
        props.display_form("")
        props.handle_signup(user)
    }
    return (
        <form onSubmit={submitForm}>
            <div className="auth-input-field">
                <div><label>Username</label></div>
                <input type="text" name="username"/>
            </div>
            <div className="auth-input-field">
                <div><label>Password</label></div>
                <input type="password" name="password"/>
            </div>
            <div className="auth-input-field">
                <div><label>First Name</label></div>
                <input type="text" name="first_name"/>
            </div>
            <div className="auth-input-field">
                <div><label>Last Name</label></div>
                <input type="text" name="last_name"/>
            </div>
            <div className="auth-buttons">
                <input className="auth-button" type="button" value="BACK" onClick={()=>props.display_form("login")}/>
                <input className="auth-button" type="submit" value="SUBMIT"/>
            </div>
        </form>
    )
}
export default SignupForm