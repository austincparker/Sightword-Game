import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getWords = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/sightwords.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getWords;
