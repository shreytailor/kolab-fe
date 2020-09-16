import questionAdd from "../dbactions/questionAdd"

type Question = {
    questionId : string,
    question : string,
    time_created : string,
    is_answered : string
}

export default Question;