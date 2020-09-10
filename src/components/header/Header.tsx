/*
    React Imports (including stylesheets).
*/
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

/*
    Imports for components, media.
*/
import logo from './../../resources/logo.png';
import backarrow from './../../resources/backarrow.svg';

/*
    Component Props Requirements.
*/
type HeaderProps = {
    backButton ?: boolean
}


function Header({backButton} : HeaderProps) {
    return (
        <div className={styles.Header}>
            <div className={styles.headerbar}>
                {
                    backButton &&
                    <Link to="/">
                        <img className={styles.backarrow} src={backarrow} />
                    </Link>
                }
                <img className={styles.logo} src={logo} />
            </div>
        </div>
    )
}


export default Header;