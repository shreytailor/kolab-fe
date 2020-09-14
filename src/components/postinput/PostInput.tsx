/*
    React Imports (including stylesheets).
*/
import React from 'react';
import styles from './PostInput.module.css';

type PostInputProps = {
    listener : React.Dispatch<React.SetStateAction<boolean>>
}

function PostInput({listener} : PostInputProps) {
    return (
        <div className={styles.root}>            
            <textarea className={styles.inputarea} placeholder="Write your question here..."></textarea>

            <div className={styles.actions}>
                <p className={styles.action}>Post</p>
                <p onClick={() => {
                    listener(false);
                }} className={styles.action}>Cancel</p>
            </div>
        </div>
    )
}

export default PostInput;