import React, { useState, useEffect } from 'react';
import './AuthForm.css';
import SignupForm from '../form/SignupForm'
import { Ilogin, emailFormat, validatationError, IErrorObject } from "../../react-interface"

const LoginForm = (props:Ilogin) => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabledButton, setDisabledButton] = useState(true)
    const [validateError, setValidateError] = useState<IErrorObject>({
        "email" : "",
        "password" : ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const name = e.target.name;
        if(name === "email") {
            if(!newValue) validatationError["email"] = "Email cannot be NULL!"
            else if(!emailFormat.test(newValue)) validatationError["email"] = "Invalid email!"
            else validatationError["email"] = ""
            setEmail(newValue)
        }else {
            if(!newValue) validatationError["password"] = "Password cannot be NULL"
            else validateError["password"] = ""
            setPassword(newValue)
        }
        if(validatationError['email'] || validatationError['password']) {
            setDisabledButton(true)
        }else {
            setDisabledButton(false)
        }
        setValidateError(validatationError)
    }
    const clearForm = () => {
        setEmail("")
        setPassword("")
        props.clearError()
        setValidateError({})
    }
    const submitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!

        const user = {
            email : email,
            password : password,
        }
        props.display_form("")
        props.handle_login(user)
    }
    return (
        <div>
            {!props.showLogInForm && props.email && <div className="response-text" style={{marginTop:"10%"}}><h1>Welcome Back {props.email}</h1></div>}
            
            { props.showLogInForm && !props.showSignUpForm && 
                <div className='auth-form'>
                    <h1>LOGIN</h1>
                    { props.showLogInForm && props.error && <div>{
                        <span>{props.error["non_field_errors"]}</span>
                    }
                    </div>}
                    <form onSubmit={submitForm}>
                        <div className="auth-input-field">
                            <label>Email</label>
                            <input type="text" name="email" value={email} onChange={handleChange}/>
                            { validateError["email"] && <div>{
                                <span>{validateError["email"]}</span>
                            }
                            </div>}
                        </div>
                        <div className="auth-input-field">
                            <label>Password</label>
                            <input type="password" name="password" value={password} onChange={handleChange}/>
                            { validateError["password"] && <div>{
                                <span>{validateError["password"]}</span>
                            }
                            </div>}
                        </div>
                        <div className="auth-buttons">
                            <input className="auth-button no-auth-button" type="button" value="CLEAR" onClick={clearForm}/>
                            { disabledButton ? <input className="auth-button" type="submit" value="SUBMIT" disabled/> : <input className="auth-button" type="submit" value="SUBMIT"/>}
                        </div>
                        <div className="auth-action-link">
                            <div onClick={()=>{
                                props.clearError()
                                props.display_form("signup")
                            }
                            }>Register Now</div>
                            <div>Forgot Password</div>
                        </div>
                    </form>
                </div>
                }
                { props.showSignUpForm && !props.showLogInForm && 
                <div className='auth-form auth-signup-form'>
                    <h1>REGISTRATION</h1>
                    <SignupForm showSignUpForm={props.showSignUpForm} email={props.email} error={props.error} handle_signup={props.handle_signup} display_form={props.display_form} clearError={props.clearError}></SignupForm>
                </div>
            }
        </div>
    )
}
export default LoginForm