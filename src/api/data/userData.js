import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      resolve(Object.values(response.data)[0]);
    })
    .catch(reject);
});

const createUser = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/users.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbURL}/users/${firebaseKey}.json`, { firebaseKey })
        .then(resolve);
    })
    .catch(reject);
});

export { getUserByUid, createUser };
