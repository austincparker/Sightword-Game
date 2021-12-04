import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { createUser, getUserByUid } from '../api/data/userData';
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
          if (taco) {
            setUser(taco);
          } else {
            createUser(userInfoObj).then(() => setUser(userInfoObj));
            if (userInfoObj.admin) {
              setAdmin(userInfoObj);
            }
            if (userInfoObj.admin) {
              setAdmin(userInfoObj);
            }
          }
        });
      } else if (user || user === null) {
        setUser(false);
        setAdmin(null);
      }
    });
  }, []);
  if (admin) {
    console.warn(admin.uid);
  }
  return (
    <div className="App">
      <h1 className="display-1 text-center"> Sightword Capstone </h1>
      <h3 className="text-center text-muted display-3">is comin at ya...</h3>
      {user ? (
        <>
          <h1>You are logged in.</h1>
        </>
      ) : (
        <SignIn user={user} />
      )}
    </div>
  );
}

export default Initialize;
