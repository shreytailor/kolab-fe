/*
    React Imports (including stylesheets).
*/
import React from 'react'
import styles from './Heading.module.css';

/*
    Component Props Requirements.
*/
type HeadingProps = {
    className ?: string,
    string : string,
    fontsize : string
}

function Heading({className, string, fontsize} : HeadingProps) {
    const headingStyle = {
        fontSize: fontsize
    }

    return (
        <div className={className}>
            <div className={styles.Heading}>
                <h3 style={headingStyle} className={styles.string}>{string}</h3>
            </div>
        </div>
    )
}


export default Heading;