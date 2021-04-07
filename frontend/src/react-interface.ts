export interface IUserData {  
    email?: string;  
    password?: string;
    first_name?: string;
    last_name?: string;
}  

export interface Ilogin {  
    handle_login  : (userData: IUserData) => void;
    handle_signup : (userData: IUserData) => void;
    email : string;
    showLogInForm : boolean;
    showSignUpForm : boolean;
    display_form : (formType: string) => void;
    clearError : () => void;
    error : IErrorObject;
} 

export interface ISignup {  
    handle_signup  : (userData: IUserData) => void;
    display_form : (formType:string) => void;
    clearError : () => void;
    email : string;
    error : IErrorObject;
    showSignUpForm : boolean;
} 

interface NavbarItem {
    name: string,
    url: string
}

export interface IErrorObject {
    [key: string] : string
}

export interface NavbarProps {
    brandImage: string
    brand: string
    item : NavbarItem[]
    color: string
    collapsed : Boolean
    toggleNavbar : () => void
    handle_login  : (userData: IUserData) => void;
    handle_signup : (userData: IUserData) => void;
    handle_logout : () => void;
    email : string;
    showLogInForm : boolean;
    showSignUpForm : boolean;
    display_form : (formType: string) => void;
    error : IErrorObject;
    clearError : () => void;
}

export const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordFormat = /^[A-Za-z0-9]+$/

export const validatationError = {
    "email": "",
    "password": "",
    "mobile_number": ""
}