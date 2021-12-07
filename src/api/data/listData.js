import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getLists = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/lists.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getLists;
