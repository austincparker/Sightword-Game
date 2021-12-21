import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getLists } from '../api/data/listData';
import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';
import { getBadges } from '../api/data/badgeData';
import Badges from '../components/Badges';
import BadgeForm from '../components/BadgeForm';

export default function AdminView({ admin }) {
  const [lists, setLists] = useState([]);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    getLists().then(setLists);
    getBadges().then(setBadges);
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-3 display-4">Welcome, {admin.fullName}</h1>
      <div>
        <ListForm setLists={setLists} />
      </div>
      <div className="list-space d-flex flex-wrap justify-content-center">
        {lists.map((list) => (
          <ListCard
            key={list.firebaseKey}
            list={list}
            admin={admin}
            setLists={setLists}
          />
        ))}
      </div>
      <div>
        <BadgeForm setBadges={setBadges} />
      </div>
      <div className="badge-space d-flex flex-wrap justify-content-center">
        {badges.map((badge) => (
          <Badges
            key={badge.firebaseKey}
            badge={badge}
            admin={admin}
            setBadges={setBadges}
          />
        ))}
      </div>
    </div>
  );
}

AdminView.defaultProps = {
  admin: null,
};
AdminView.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};
