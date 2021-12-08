import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../components/ListCard';
import { getLists } from '../api/data/listData';

export default function Home({ user }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists().then(setLists);
  });

  return (
    <div>
      <h1>You are not an admin, {user.fullName}</h1>
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
