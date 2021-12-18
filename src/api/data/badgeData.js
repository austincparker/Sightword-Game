import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getBadges = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/badges.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getBadgeByBadgeId = (badgeId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/badges/${badgeId}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getUserBadgesByUid = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/user_badges.json?orderBy="user_id"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getBadgesByUid = (uid) => new Promise((resolve, reject) => {
  getUserBadgesByUid(uid)
    .then((userBadgeArray) => {
      const badgeArray = userBadgeArray.map((userBadgeObj) => getBadgeByBadgeId(userBadgeObj.badge_id).then((badgeObj) => badgeObj));
      Promise.all(badgeArray).then(resolve);
    })
    .catch(reject);
});

const createBadge = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/badges.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/badges/${firebaseKey}.json`, {
          firebaseKey,
        })
        .then(() => {
          getBadges().then(resolve);
        });
    })
    .catch(reject);
});

const deleteBadge = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/badges/${firebaseKey}.json`)
    .then(() => getBadges().then(resolve))
    .catch(reject);
});

export {
  getBadges,
  createBadge,
  getUserBadgesByUid,
  getBadgeByBadgeId,
  getBadgesByUid,
  deleteBadge,
};
