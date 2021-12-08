import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleList } from '../api/data/listData';
import SingleWord from '../components/SingleWord';

export default function Play() {
  const [playList, setPlayList] = useState({});
  const [score, setScore] = useState(0);
  const { key } = useParams();

  useEffect(() => {
    getSingleList(key).then(setPlayList);
  });

  return (
    <div className="text-center">
      <h1>this is list {playList.name}</h1>
      <SingleWord list={playList} score={score} setScore={setScore} />
      <button type="button">wrong</button>
      <button type="button">right</button>
    </div>
  );
}
