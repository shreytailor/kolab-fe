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
            <p>Question: {question.question}</p>
            <p>Time Added: {question.time_created}</p>
            <p>Is Answered: {question.is_answered}</p>
        </div>
    )
}

export default QuestionCard;