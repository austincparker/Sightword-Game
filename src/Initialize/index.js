import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { signOutUser } from '../api/auth';
import { createUser, getUserByUid } from '../api/data/userData';
import Navigation from '../components/Navigation';
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
        setAdmin(null);
      }
    });
  }, []);
  if (admin) {
    console.warn('vvv this is the admin uid vvv');
    console.warn(admin.uid);
    console.warn('^^^^^');
  }
  return (
    <div className="App">
      {user ? (
        <>
          <Navigation />
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
