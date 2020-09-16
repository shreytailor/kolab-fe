import axios from 'axios';

function questionDelete (questionId : string) {
    // Sending a POST request to the API to delete the question.
    return axios.post(`${process.env.REACT_APP_API}/question/delete`, {
        "questionId": questionId
    }).then (function (response) {
        return response.data;
    })
}

export default questionDelete;