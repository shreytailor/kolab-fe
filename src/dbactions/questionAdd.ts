import axios from 'axios';

async function questionAdd (question : String) {
    // Send a POST request to add the question to the database.
    axios.post(`${process.env.REACT_APP_API}/question/add`, {
        "question": `${question}`
    }).catch (function (error) {
        if (error) throw error;
    })
}

export default questionAdd;