/*
    React Imports (including stylesheets).
*/
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';


/**
 * This function is the callback used for a failed login.
 * @param response 
 */
function failedLogin(error: any | undefined) {
    alert("The Authentication process failed because the window was closed. Please try again.");
}

export default failedLogin;