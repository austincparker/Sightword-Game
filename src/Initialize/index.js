import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import SignIn from '../views/SignIn';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
          admin: false,
        };
        setUser(userInfoObj);
      }
    });
  }, []);

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
