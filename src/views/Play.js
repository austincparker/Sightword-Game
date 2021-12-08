import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleList } from '../api/data/listData';
import SingleWord from '../components/SingleWord';

export default function Play() {
  const [playList, setPlayList] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleList(key).then(setPlayList);
  });

  return (
    <div>
      <h1>this is list {playList.name}</h1>
      <SingleWord list={playList} />
    </div>
  );
}
