/*
    React Imports (including stylesheets).
*/
import React, { useState } from 'react';
import styles from './PostInput.module.css';

type PostInputProps = {
    listener : React.Dispatch<React.SetStateAction<boolean>>
}

function PostInput({listener} : PostInputProps) {
    const [text, setText] = useState("");

    return (
        <div className={styles.root}>            
            <textarea onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(event.target.value);
            }} className={styles.inputarea} placeholder="Write your question here..."></textarea>

            <div className={styles.actions}>
                <p onClick={() => {

                    if (text.length !== 0) {
                        // Add to the database.
                    }

                }} className={styles.action}>Post Question</p>

                <p onClick={() => {
                    listener(false);
                }} className={styles.action}>Cancel</p>
            </div>
        </div>
    )
}

export default PostInput;