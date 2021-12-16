import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../components/ListCard';
import { getLists } from '../api/data/listData';
import { getBadgesByUid } from '../api/data/badgeData';
import Badges from '../components/Badges';

export default function Home({ user }) {
  const [lists, setLists] = useState([]);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getLists().then((listArray) => {
      if (isMounted) setLists(listArray);
    });
    getBadgesByUid(user.uid).then((badgeArray) => {
      if (isMounted) setBadges(badgeArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1 className="text-center display-4">Welcome, {user.fullName}</h1>
      <h5 className="text-center display-6">My Badges</h5>
      <div className="badge-space d-flex flex-wrap justify-content-center m-2">
        {badges.map((badge) => (
          <Badges key={badge.firebaseKey} badge={badge} setBadges={setBadges} />
        ))}
      </div>
      <h5 className="text-center display-6">Pick a list to play!</h5>
      <div className="list-space d-flex flex-wrap justify-content-center">
        {lists.map((list) => (
          <ListCard key={list.firebaseKey} list={list} setLists={setLists} />
        ))}
      </div>
    </div>
  );
}

Home.defaultProps = {
  user: null,
};
Home.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
