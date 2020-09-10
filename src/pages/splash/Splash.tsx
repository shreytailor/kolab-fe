/*
    React Imports (including stylesheets).
*/
import React from 'react';
import { Link } from "react-router-dom";
import './../../App.css';
import styles from './Splash.module.css';

/*
    Imports for components, media.
*/
import useScript from "./../../hooks/useScript";
import logo from "./../../resources/logo.png";
import backdrop from "./../../resources/avcol.jpeg";
import faviconfooter from "./../../resources/favicon_footer.png";
import logofooter from "./../../resources/logo_footer.png";


function Splash() {
    useScript("https://platform.twitter.com/widgets.js");
    useScript("https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0");

    return(
        <div className={styles.Splash}>
            <div className="globalpadding">
                <div className={styles.headerbar}>
                    <img src={logo} className={styles.logo} alt="kolab-logo" />
                    <Link to="/signin">
                        <button className={styles.signinbutton}>Sign In</button>
                    </Link>
                </div>

                <div className={styles.herocontainer}>
                    <div className={styles.backdrop}></div>
                    <h1>An effective student <br/> collaboration tool.</h1>
                </div>

                <div className={styles.body}>
                    <div className={styles.section}>
                        <h2 className={styles.title}>Why Kolab? 🤔</h2>
                        <p className={styles.details}>Kolab is a very unique collaborative platform, as it helps students to quickly get assistance from their peers. It's simplistic interface ensures that students are always motivated and onto their tasks.</p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.title}>Key Features 📖</h2>
                        <p className={styles.details}>
                            <li><b>Anonymous</b> - maintaining your anonymity as a questioner, or even when answering questions. These are safe measures to avoid any cyber-bullying.</li>
                            <li><b>Discussions</b> - the ability for students to have further discussions on the same thread, if they have any more queries.</li>
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.title}>Share with others! 🎉</h2>
                        <p className={styles.details}>If you like our concept and think it'd be helpful for more students around the world, please don't forget to spread the word.</p>
                        <div className={styles.sociallinks}>
                        <div className={styles.link}>
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Hi everyone! Check out Kolab. It&#39;s a brilliant tool for students, and I believe all secondary schools should have it for their learning." data-hashtags="KolabWithOthers" data-show-count="false">Tweet</a>
                        </div>
                        <div className={styles.link}>
                        <div className="fb-share-button" data-href="https://www.google.com" data-layout="button" data-size="large"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.google.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.logobounder}>
                    <img className={styles.favicon} src={faviconfooter} />
                    <img className={styles.logo} src={logofooter} />
                </div>
                <p className={styles.credit}>Developed by Shrey Tailor.</p>
            </div>
        </div>
    )
}


export default Splash;