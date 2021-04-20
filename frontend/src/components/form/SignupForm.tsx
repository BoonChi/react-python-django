import React, { useState, useEffect } from 'react';
import "./AuthForm.css"
import { ISignup, IErrorObject, emailFormat, passwordFormat, validatationError} from "../../react-interface"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignupForm = (props: ISignup) => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [birth_date, setBirthDate] = useState("")
    const [mobile_number, setMobileNumber] = useState("")
    const [disabledButton, setDisabledButton] = useState(true)
    const [hidePassword, setHidePassword] = useState(true)
    const [validateError, setValidateError] = useState<IErrorObject>({
        "email" : "",
        "password" : "",
        "mobile_number" : ""
    })

    const submitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
            first_name : { value: string };
            last_name : { value: string };
            birth_date : { value: Date };
            mobile_number : { value: number };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
        const first_name = target.first_name.value; // typechecks!
        const last_name = target.last_name.value; // typechecks!
        const birth_date = target.birth_date.value; // typechecks!
        const mobile_number = target.mobile_number.value // typechecks!
        const user = {
            email : email,
            password : password,
            first_name : first_name,
            last_name : last_name,
            birth_date: birth_date,
            mobile_number: mobile_number
        }
        props.display_form("")
        props.handle_signup(user)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const name = e.target.name;
        if(name === "email") {
            if(!newValue) validatationError["email"] = "Email cannot be NULL!"
            else if(!emailFormat.test(newValue)) validatationError["email"] = "Invalid email!"
            else validatationError["email"] = ""
            setEmail(newValue)
        }else if(name === "password") {
            if(!newValue) validatationError["password"] = "Password cannot be NULL"
            else if(!passwordFormat.test(newValue)) validatationError["password"] = "Password only contains words or digits at least 8 characters"
            else validateError["password"] = ""
            setPassword(newValue)
        }else if(name === "first_name") {
            setFirstName(newValue)
        }else if(name === "last_name") {
            setLastName(newValue)
        }else if(name === "birth_date") {
            setBirthDate(newValue)
        }else if(name === "mobile_number") {
            if(!newValue) validatationError["mobile_number"] = "Mobile number cannot be NULL"
            else validateError["mobile_number"] = ""
            setMobileNumber(newValue)
        }
        if(validatationError['email'] || validatationError['password'] || validatationError['mobile_number'] || !email || !password || !mobile_number) {
            setDisabledButton(true)
        }else {
            setDisabledButton(false)
        }
        setValidateError(validatationError)
    }

    const handleHidePasswordChange = (input:string) => {
        if(input === "unhide") {
            setHidePassword(false)
        }else{
            setHidePassword(true)
        }

    }
    const clearForm = () => {
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setMobileNumber("")
        props.clearError()
        setValidateError({})
    }
    return (
        <div>
            {!props.showSignUpForm && props.email && <div className="response-text" style={{marginTop:"10%"}}><h1>Welcome Back {props.email}</h1></div>}
            <form onSubmit={submitForm}>
            <div className="auth-input-field">
                <div><label>Email<span>*</span></label></div>
                <input type="text" name="email" value={email} onChange={handleChange}/>
                { validateError["email"] && <div>{
                    <span>{validateError["email"]}</span>
                }
                </div>}
                { props.showSignUpForm && props.error["email"] && <div>{
                    <span>{props.error["email"]}</span>
                }
                </div>}
            </div>
            <div className="auth-input-field">
                <div><label>Password<span>*</span></label></div>
                
                { hidePassword ? 
                <div className="password-row">
                    <input type="password" name="password" value={password} onChange={handleChange}/>
                    <FontAwesomeIcon icon={faEye} onClick={() => handleHidePasswordChange("unhide")}></FontAwesomeIcon>
                </div>
                : 
                <div className="password-row">
                    <input type="text" name="password" value={password} onChange={handleChange}/>
                    <FontAwesomeIcon icon={faEyeSlash} onClick={() => handleHidePasswordChange("hide")}></FontAwesomeIcon>
                </div>
                }
                { validateError["password"] && <div>{
                    <span>{validateError["password"]}</span>
                }
                </div>}
                { props.showSignUpForm && props.error["password"] && <div>{
                    <span>{props.error["password"]}</span>
                }
                </div>}
            </div>
            <div className="auth-input-field">
                <div><label>First Name</label></div>
                <input type="text" name="first_name" value={first_name} onChange={handleChange}/>
            </div>
            <div className="auth-input-field">
                <div><label>Last Name</label></div>
                <input type="text" name="last_name" value={last_name} onChange={handleChange}/>
            </div>
            <div className="auth-input-field">
                <div><label>Mobile Number<span>*</span></label></div>
                <input type="number" name="mobile_number" value={mobile_number} onChange={handleChange}/>
                { validateError["mobile_number"] && <div>{
                    <span>{validateError["mobile_number"]}</span>
                }
                </div>}
                { props.showSignUpForm && props.error["mobile_number"] && <div>{
                    <span>{props.error["mobile_number"]}</span>
                }
                </div>}
            </div>
            <div className="auth-input-field">
                <div><label>Birth Date</label></div>
                <input type="date" name="birth_date" value={birth_date} onChange={handleChange}/>
            </div>
            <div className="auth-buttons" style={{marginTop:"10%"}}>
                <input className="auth-button no-auth-button" type="button" value="BACK" onClick={()=>props.display_form("login")}/>
                <input className="auth-button no-auth-button" type="button" value="CLEAR" onClick={clearForm}/>
                { disabledButton ? <input className="auth-button" type="submit" value="SUBMIT" disabled/> : <input className="auth-button" type="submit" value="SUBMIT"/>}
            </div>
        </form>
        </div>
        
    )
}
export default SignupForm