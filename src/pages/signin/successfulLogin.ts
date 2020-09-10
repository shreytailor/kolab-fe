/*
    React Imports (including stylesheets).
*/
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';


/**
 * This function is the callback used for a successful login.
 * @param response 
 */
function successfulLogin(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
    // Casting was required for the response, because of some errors that took long time to fix.
    const castedObject = <GoogleLoginResponse>response;

    // Checking with the back-end whether the token retrieved was valid or not.
    console.log(castedObject.getAuthResponse().id_token);
}

export default successfulLogin;