import React, { useState, useEffect } from 'react';
import './AuthForm.css';
import { Ilogin } from "../../react-interface"

const Form = (props:Ilogin) => {
    const submitForm = () => {

    }
    return (
        <div>
            <div className='auth-form'>
                <h1 className="auth-title">{props.title}</h1>
                { props.showLogInForm && props.error && <div>{
                    <span>{props.error["non_field_errors"]}</span>
                }
                </div>}
                <form>
                    <div className="auth-input-field">
                        <label></label>
                        <input />
                        {/* { validateError["email"] && <div>{
                            <span>{validateError["email"]}</span>
                        }
                        </div>} */}
                    </div>
                    <div className="auth-buttons">
                        <input className="auth-button no-auth-button" type="button" value="CLEAR"/>
                        {/* { disabledButton ? <input className="auth-button" type="submit" value="SUBMIT" disabled/> : <input className="auth-button" type="submit" value="SUBMIT"/>} */}
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
        </div>
    )
}
export default Form