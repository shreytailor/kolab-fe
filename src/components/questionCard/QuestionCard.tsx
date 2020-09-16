/*
    React Imports (including stylesheets).
*/
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
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
    const [ answer, setAnswer ] = useState("");
    const [ answerSection, setAnswerSection ] = useState(false);
    const [ inputText, setInputText ] = useState("");

    useEffect(() => {
        if (question.is_answered) {
            Axios.post(`${process.env.REACT_APP_API}/answer/get`, {
                "questionId": `${question.questionId}`
            }).then(function(response) {
                setAnswer(response.data[0]['answer']);
            })
        }
    }, [answer])

    return (
        <div className={styles.QuestionCard}>
            <div className={styles.verticalFlex}>
                <div className={styles.questionBox}>
                    <p>{question.question}</p>
                </div>

                <div className={styles.dynamicContent}>
                    {
                        question.is_answered?
                        <div>
                            <div className={styles.green}></div>
                            <div className={styles.answersection}>
                                <p className={styles.title}>Answer</p>
                                <p className={styles.answer}>{answer}</p>
                            </div>
                        </div>:
                            answerSection?
                            <div>
                                <textarea className={styles.textarea} onChange={function(event) {
                                    setInputText(event.target.value);
                                }}></textarea>
                                <p className={styles.postanswer} onClick={function() {
                                    Axios.post(`${process.env.REACT_APP_API}/answer/add`, {
                                        "questionId": `${question.questionId}`,
                                        "answer": `${inputText}`
                                    }).then(function (response) {
                                        doReset(true);
                                        doReset(false);
                                        setAnswer(inputText);
                                    })
                                }}>Set Answer</p>
                                <p className={styles.cancelanswer} onClick={function() {
                                    setAnswerSection(false);
                                }}>Cancel</p>
                            </div>:
                            <div>
                               <p className={styles.haveAnAnswer} onClick={() => {
                                   setAnswerSection(true);
                               }}>Have an answer?</p> 
                            </div>
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