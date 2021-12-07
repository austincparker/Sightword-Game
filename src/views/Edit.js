import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleList } from '../api/data/listData';
import ListForm from '../components/ListForm';

export default function Edit() {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleList(key).then(setEditItem);
  }, []);

  return (
    <div>
      <h1>Edit View</h1>
      <ListForm editItem={editItem} />
      <h3 className="text-center display-5">Edit the {editItem.name} List!</h3>
    </div>
  );
}
