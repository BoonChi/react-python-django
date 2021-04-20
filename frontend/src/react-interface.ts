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
    title : string;
} 

export interface ISignup {  
    handle_signup  : (userData: IUserData) => void;
    display_form : (formType:string) => void;
    clearError : () => void;
    email : string;
    error : IErrorObject;
    showSignUpForm : boolean;
    title : string;
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

export const emailFormat = /^[a-zA-Z0-9\_]+\@[a-z0-9]+(\.[a-z0-9]+)*\.([a-z0-9]{2,})$/

export const passwordFormat = /^([A-Za-z0-9]{8,})+$/

export const validatationError = {
    "email": "",
    "password": "",
    "mobile_number": ""
}