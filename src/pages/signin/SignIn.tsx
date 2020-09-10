/*
    React Imports (including stylesheets).
*/
import React from 'react';
import './../../App.css';
import styles from './SignIn.module.css';

/*
    Imports for components, media.
*/
import Header from './../../components/header/Header';


function Login() {
    return (
        <div className="Login">
            <div className="globalpadding">
                <Header backButton={true}/>
            </div>
        </div>
    )
}


export default Login;