/**
 * This function is the callback used for a failed login.
 * @param response 
 */
function failedLogin(error: any | undefined) {
    alert("Authentication process interrupted by the user. Please try again.");
}

export default failedLogin;