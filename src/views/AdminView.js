import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getLists from '../api/data/listData';
import ListCard from '../components/ListCard';

export default function AdminView({ admin }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists().then(setLists);
  });

  return (
    <div>
      <h1>this is home, {admin.fullName}</h1>
      <h2>Word Form</h2>
      <h2>List Cards</h2>
      <div className="list-space d-flex flex-wrap">
        {lists.map((list) => (
          <ListCard key={list.firebaseKey} list={list} admin={admin} />
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
