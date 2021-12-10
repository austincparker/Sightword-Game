import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../components/ListCard';
import { getLists } from '../api/data/listData';
import { getUserBadgesByUid } from '../api/data/badgeData';
import Badges from '../components/Badges';

export default function Home({ user }) {
  const [lists, setLists] = useState([]);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getLists().then((listArray) => {
      if (isMounted) setLists(listArray);
    });
    getUserBadgesByUid(user.uid).then((badgeArray) => {
      if (isMounted) setBadges(badgeArray);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <div>
      <h1>You are not an admin, {user.fullName}</h1>
      <h5>My Badges</h5>
      <div className="badge-space d-flex flex-wrap">
        {badges.map((badge) => (
          <Badges key={badge.firebaseKey} badge={badge} />
        ))}
      </div>
      <h5>Pick a list to play!</h5>
      <div className="list-space d-flex flex-wrap">
        {lists.map((list) => (
          <ListCard key={list.firebaseKey} list={list} />
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
