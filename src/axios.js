import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-8a5ba.cloudfunctions.net/api', // the API cloud function URL
});

export default instance;

// http://localhost:5001/clone-8a5ba/us-central1/api
