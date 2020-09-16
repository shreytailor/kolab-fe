/*
    React Imports (including stylesheets).
*/
import React, { useState } from 'react';
import styles from './PostInput.module.css';

/*
    Imports for components, media.
*/
import questionAdd from './../../dbactions/questionAdd';

type PostInputProps = {
    listener : React.Dispatch<React.SetStateAction<boolean>>,
    socket: SocketIOClient.Socket
}

function PostInput({listener, socket} : PostInputProps) {
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
                        socket.emit('update');
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