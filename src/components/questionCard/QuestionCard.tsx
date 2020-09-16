/*
    React Imports (including stylesheets).
*/
import React from 'react';
import styles from './QuestionCard.module.css';

/*
    Imports for components, media.
*/
import Question from './../../models/Question';

type QuestionCardProps = {
    question : Question
}

function QuestionCard({question} : QuestionCardProps) {
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
                    
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;