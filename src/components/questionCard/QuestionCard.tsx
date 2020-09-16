/*
    React Imports (including stylesheets).
*/
import React from 'react';
import styles from './QuestionCard.module.css';

/*
    Imports for components, media.
*/
import Question from './../../models/Question';
import questionDelete from './../../dbactions/questionDelete';

type QuestionCardProps = {
    question : Question,
    doReset: React.Dispatch<React.SetStateAction<boolean>>
}

function QuestionCard({question, doReset} : QuestionCardProps) {
    return (
        <div className={styles.QuestionCard}>
            <div className={styles.verticalFlex}>
                <div className={styles.questionBox}>
                    <p>{question.question}</p>
                </div>

                <div className={styles.dynamicContent}>
                    {
                        question.is_answered?
                        <div className={styles.green}></div>:
                        <div className={styles.haveAnAnswer}>Have an answer?</div>
                    }
                </div>

                <div className={styles.questionActions}>
                    <button className={[styles.button, styles.speak].join(' ')} onClick={function () {
                        const speaker = new SpeechSynthesisUtterance();
                        speaker.text = question.question;
                        window.speechSynthesis.speak(speaker);
                    }}>Speak</button>
                    <button className={[styles.button, styles.delete].join(' ')} onClick={function () {
                        questionDelete(question.questionId).then(function(data) {
                            doReset(true);
                            doReset(false);
                        })
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;