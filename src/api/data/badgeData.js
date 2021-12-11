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
  const badgeArray = [];
  getUserBadgesByUid(uid)
    .then((userBadgeArray) => {
      userBadgeArray.map((userBadgeObj) => getBadgeByBadgeId(userBadgeObj.badge_id).then((badgeObj) => {
        console.warn(userBadgeObj);
        console.warn(badgeObj);
        badgeArray.push(badgeObj);
      }));
    })
    .then(() => resolve(Object.values(badgeArray)))
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

export {
  getBadges,
  createBadge,
  getUserBadgesByUid,
  getBadgeByBadgeId,
  getBadgesByUid,
};
