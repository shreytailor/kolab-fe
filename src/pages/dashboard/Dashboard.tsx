import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import './../../App.css';

function Dashboard() {
    const cookies = new Cookies();

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

    return (
        <div className="globalpadding">
            <p>Hello there!</p>
        </div>
    )
}

export default Dashboard;