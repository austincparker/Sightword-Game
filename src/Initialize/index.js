import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { signOutUser } from '../api/auth';
import { createUser, getUserByUid } from '../api/data/userData';
import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
          admin: false,
        };
        console.warn(userInfoObj.fullName);
        getUserByUid(authed.uid).then((taco) => {
          if (taco && taco.admin) {
            setUser(taco);
            setAdmin(taco);
          } else if (taco) {
            setUser(taco);
          } else {
            createUser(userInfoObj).then(() => setUser(userInfoObj));
          }
        });
      } else if (user || user === null) {
        setUser(false);
        setAdmin(false);
      }
    });
  }, []);
  if (admin) {
    console.warn('this is the admin uid');
    console.warn(admin.uid);
    console.warn('^^^^^');
  }
  return (
    <div className="App">
      <h1 className="display-1 text-center"> Sightword Capstone </h1>
      <h3 className="text-center text-muted display-3">is comin at ya...</h3>
      {user ? (
        <>
          <h1>You are logged in.</h1>
          <Routes admin={admin} user={user} />
          <button type="button" onClick={signOutUser}>
            Logout
          </button>
        </>
      ) : (
        <SignIn user={user} />
      )}
    </div>
  );
}
export default Initialize;
