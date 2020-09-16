import axios from 'axios';
import Question from '../models/Question';

async function questionAdd () {
    // Send a POST request to add the question to the database.
    return axios.get(`${process.env.REACT_APP_API}/question/getAll`).then(function (response) {
        return response.data as Array<Question>;
    })
}

export default questionAdd;