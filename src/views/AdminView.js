import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getLists } from '../api/data/listData';
import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';

export default function AdminView({ admin }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists().then(setLists);
  });

  return (
    <div>
      <h1>this is home, {admin.fullName}</h1>
      <div>
        <ListForm setLists={setLists} />
      </div>
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
