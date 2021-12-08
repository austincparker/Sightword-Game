import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getLists = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/lists.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createList = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/lists.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/lists/${firebaseKey}.json`, {
          firebaseKey,
        })
        .then(() => {
          getLists().then(resolve);
        });
    })
    .catch(reject);
});

const deleteList = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/lists/${firebaseKey}.json`)
    .then(() => getLists().then(resolve))
    .catch(reject);
});

const getSingleList = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/lists/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const updateList = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/lists/${firebaseKey}.json`, updateObj)
    .then(() => getLists().then(resolve))
    .catch(reject);
});

export {
  getLists, createList, deleteList, getSingleList, updateList,
};
