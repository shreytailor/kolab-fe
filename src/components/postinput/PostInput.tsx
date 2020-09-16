/*
    React Imports (including stylesheets).
*/
import React, { useState } from 'react';
import styles from './PostInput.module.css';

/*
    Imports for components, media.
*/
import Question from './../../models/Question';
import questionAdd from './../../dbactions/questionAdd';
import questionGetAll from './../../dbactions/questionGetAll';

type PostInputProps = {
    listener : React.Dispatch<React.SetStateAction<boolean>>,
    databaseAction: React.Dispatch<React.SetStateAction<Question[]>>
}

function PostInput({listener, databaseAction} : PostInputProps) {
    const [text, setText] = useState("");

    return (
        <div className={styles.root}>            
            <textarea onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(event.target.value);
            }} className={styles.inputarea} placeholder="Write your question here..."></textarea>

            <div className={styles.actions}>
                <p onClick={async () => {

                    if (text.length !== 0) {
                        await questionAdd(text);
                        questionGetAll().then(function (data) {
                            databaseAction(data);
                        })
                        listener(false);
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