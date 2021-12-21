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
  return (
    <div className="App container pb-3">
      {user ? (
        <>
          <Navigation />
          <Routes admin={admin} user={user} />
          <button
            type="button"
            onClick={signOutUser}
            className="btn btn-outline-danger"
          >
            Logout
          </button>
        </>
      ) : (
        <div>
          <div className="text-center">
            <img
              src="../../../imgs/sightwordgamelogo.png"
              width="300px"
              className="m-auto"
              alt="sightwordgame"
            />
          </div>
          <SignIn user={user} />
        </div>
      )}
    </div>
  );
}
export default Initialize;
