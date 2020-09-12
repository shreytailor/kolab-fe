/*
    React Imports (including stylesheets).
*/
import axios from 'axios';
import './../../App.css';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import styles from './SignIn.module.css';
import { Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

/*
    Imports for components, media.
*/
import Header from './../../components/header/Header';
import Heading from './../../components/heading/Heading';


function Login() {
    // Using state to tell if the user is currently logged in or not.
    const cookies = new Cookies();
    const [ loginState, setLoginState ] = useState(Boolean);

    // Check whether the cookie is properly stored, if yes then change the logged in state.
    useEffect(() => {
        try {
            const cookie = cookies.get("loginDets");
            const tokenId = cookie.tokenId;
            jwt_decode(tokenId);
            setLoginState(true);
        } catch(error) {
            setLoginState(false);
        }
    });

    // The callback function for a successful Google login.
    function successfulLogin(response:GoogleLoginResponse|GoogleLoginResponseOffline) {
        // Casting was required for the response, because of some errors that took long time to fix.
        const castedObject = response as GoogleLoginResponse;
        const tokenId = castedObject.getAuthResponse().id_token;
        console.log(tokenId);

        // Checking with the back-end whether the token retrieved was valid or not.
        axios.post(`${process.env.REACT_APP_API}/tokenId/validate`, {
            tokenId: tokenId
        }).then(function(response) {

            // If the token was valid, then we set a cookie that contains the Token ID.
            if (response.data.status === 200) {
                const cookieObject = {
                    tokenId: tokenId,
                    name: response.data.name,
                    email: response.data.email
                }

                // Setting the Token ID, Name and Email in the cookie.
                cookies.set("loginDets", cookieObject, { path: '/'});
                setLoginState(true);
                return <Redirect to = "/dashboard" />
            }

        });
    }

    // The callback function for a unsuccessful Google login.
    function failedLogin() {
        alert("Authentication process interrupted by the user. Please try again.");
    }

    // If the user is currently logged in, then show the dashboard.
    if (loginState) {
        return (
            <Redirect to = "/dashboard" />
        )
    }

    // If the user is not currently logged-in, then show the Login screen itself.
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