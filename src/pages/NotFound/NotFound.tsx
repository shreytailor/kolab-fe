/*
    React Imports (including stylesheets).
*/
import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';


function NotFound() {
    return(
        <div className={styles.NotFound}>
            <div className={styles.center}>
                <p className={styles.bold}>404</p>
                <p className={styles.secondary}>This page is missing.</p>
                <Link to="/">
                    <button className={styles.gohome}>GO HOME</button>
                </Link>
            </div>
        </div>
    )
}


export default NotFound;