import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import './../../App.css';
import Header from '../../components/header/Header';
import styles from './Dashboard.module.css';
import { useHistory } from 'react-router-dom';

function Dashboard() {
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

    let name = cookies.get("loginDets")["name"];

    return (
        <div className="globalpadding">
            <Header />
            <div className={styles.dashactions}>
                <p>Welcome {name}!</p>
                <button onClick={() => {
                    cookies.remove("loginDets");
                    history.push("/");
                }} className={styles.signoutbutton}>Sign Out</button>
            </div>
        </div>
    )
}

export default Dashboard;