import axios from 'axios'

const instance = axios.create({
    //The API URL(cloud function)
    baseURL:`http://localhost:5001/clone-6560e/us-central1/api`
});

export default instance;