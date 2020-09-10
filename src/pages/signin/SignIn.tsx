/*
    React Imports (including stylesheets).
*/
import React from 'react';
import './../../App.css';
import { GoogleLogin } from 'react-google-login';
import styles from './SignIn.module.css';

/*
    Imports for components, media.
*/
import Header from './../../components/header/Header';
import Heading from './../../components/heading/Heading';
import successfulLogin from './successfulLogin';
import failedLogin from './failedLogin';


function Login() {
    return (
        <div className="globalpadding">
            <Header backButton={true}/>
            <div className={styles.signinflex}>
                <div className={styles.signincontainer}>
                    <Heading className={styles.heading} string="Sign In Using Google" fontsize="1.3rem"/>
                    <p>Use your academic Google account to access the portal.</p>
                    
                    <div className={styles.buttonbox}>
                        <GoogleLogin
                            className={styles.button}
                            clientId={`${process.env.REACT_APP_CLIENT_ID}`}
                            buttonText="Sign In"
                            onSuccess={successfulLogin}
                            onFailure={failedLogin}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            </div>
            <div id="testing"></div>
        </div>
    )
}


export default Login;