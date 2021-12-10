import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleList } from '../api/data/listData';
import SingleWord from '../components/SingleWord';

export default function Play() {
  const [playList, setPlayList] = useState({});
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [word, setWord] = useState('');
  const { key } = useParams();

  const playWords = [
    playList.word_1,
    playList.word_2,
    playList.word_3,
    playList.word_4,
    playList.word_5,
    playList.word_6,
  ];

  useEffect(() => {
    let isMounted = true;
    getSingleList(key).then((list) => {
      if (isMounted) setPlayList(list);
    });
    setWord(playWords[0]);
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCorrect = () => {
    if (current < 6) {
      setCurrent(current + 1);
      setScore(score + 1);
      setWord(playWords[current]);
    } else {
      setScore(6);
      console.warn('you hit 6');
    }
  };

  const handleWrong = () => {
    if (current < 6) {
      setCurrent(current + 1);
      setWord(playWords[current]);
    } else {
      setCurrent(6);
      console.warn('you hit 6');
    }
  };

  // console.warn(playWords[1]);

  return (
    <div className="text-center">
      <h1>this is list {playList.name}</h1>
      <SingleWord
        list={playList}
        score={score}
        setScore={setScore}
        word={word}
      />
      <button type="button" onClick={handleWrong}>
        wrong
      </button>
      <button type="button" onClick={handleCorrect}>
        right {score}
      </button>
    </div>
  );
}
