/*
    React Imports (including stylesheets).
*/
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './../../App.css';

/*
    Imports for components, media.
*/
import Header from '../../components/header/Header';
import styles from './Dashboard.module.css';
import PostInput from '../../components/postinput/PostInput';
import Heading from '../../components/heading/Heading';


function Dashboard() {
    // Integrating states for showing/hiding the Post input box.
    const [ isInputShowing, setIsInputShowing ] = useState(false);

    // Initially, we are doing the process of checking the logged-in status.
    const cookies = new Cookies();
    let history = useHistory();
    let tokenId : string;
    try {
        tokenId = cookies.get("loginDets")["tokenId"];
        console.log(tokenId);
    } catch (error) {
        return <Redirect to = "/signin"/>
    }
    try {
        console.log(jwt_decode(tokenId));
    } catch (error) {
        return <Redirect to = "/signin"/>
    }

    // If the user was logged-in, try to extract their name from the cookie set up.
    let name:string = cookies.get("loginDets")["name"];

    // Finally render the Dashboard to the user.
    return (
        <div className="globalpadding">
            <Header />
            <div className={styles.dashactions}>
                <p>Welcome {name.split(" ")[0]}!</p>
                <div className={styles.buttons}>
                    <button onClick={(event) => {
                        setIsInputShowing(true);
                    }} className={styles.postbutton}>Post Question</button>
                    <button onClick={() => {
                        cookies.remove("loginDets");
                        history.push("/");
                    }} className={styles.signoutbutton}>Sign Out</button>
                </div>
            </div>
            
            {isInputShowing &&
                <PostInput listener={setIsInputShowing} />
            }

            <Heading className={styles.heading} string="All Questions" fontsize="1.5rem" />
        </div>
    )
}


export default Dashboard;