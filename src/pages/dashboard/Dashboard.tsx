/*
    React Imports (including stylesheets).
*/
import Cookies from 'universal-cookie';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './../../App.css';

/*
    Imports for components, media.
*/
import styles from './Dashboard.module.css';
import Question from '../../models/Question';
import Header from '../../components/header/Header';
import Heading from '../../components/heading/Heading';
import PostInput from '../../components/postinput/PostInput';
import questionGetAll from './../../dbactions/questionGetAll';
import QuestionCard from '../../components/questionCard/QuestionCard';

function Dashboard() {
    // Integrating states for showing/hiding the Post input box.
    const [ isInputShowing, setIsInputShowing ] = useState(false);
    const [ database, setDatabase ] = useState(Array<Question>()); 
    const [ reset, doReset ] = useState(false);

    function fetchQuestions() {
        questionGetAll().then(function (data) {
            setDatabase(data);
        })
    }

    /*
        This approach of updating the dashboard with the latest questions was probably the most in-
        but it was required because the API speed was such (slow) that it was causing some major
        issues. In real life deployment, this can easily be avoided by using a faster speed for API.
    */
    useEffect(() => {
        fetchQuestions();
    }, [reset])
    useEffect(() => {
        fetchQuestions();
    }, [isInputShowing])

    // Initially, we are doing the process of checking the logged-in status.
    const userCookies = new Cookies();
    let history = useHistory();
    let tokenId : string;
    
    try {
        tokenId = userCookies.get("loginDets")["tokenId"];
    } catch (error) {
        return <Redirect to = "/signin"/>
    }

    // If the user was logged-in, try to extract their name from the cookie set up.
    let name:string = userCookies.get("loginDets")["name"];


    // Iterating through each item in the database, and creating card for it.
    const cards = [];
    for (let counter = 0; counter < database.length; counter++) {
        const question = database[counter];
        cards.push(
            <div key={question.questionId}>
                <QuestionCard question={database[counter]} doReset={doReset}/>
            </div>
        )
    }

    // Finally render the Dashboard to the user.
    return (
        <div className="globalpadding">
            <Header />
            <div className={styles.dashactions}>
                <p className={styles.greeting}>Welcome {name}!</p>
                <div className={styles.buttons}>
                    <button onClick={(event) => {
                        setIsInputShowing(true);
                    }} className={styles.postbutton}>Post</button>
                    <button onClick={() => {
                        userCookies.remove("loginDets");
                        history.push("/");
                    }} className={styles.signoutbutton}>Sign Out</button>
                </div>
            </div>

            {isInputShowing &&
                <PostInput listener={setIsInputShowing} databaseAction={setDatabase} />
            }

            <div className={styles.questions}>
                <Heading className={styles.heading} string="Peer Questions" fontsize="1.5rem" />
                {
                    cards
                }
            </div>
            
        </div>
    )
}


export default Dashboard;