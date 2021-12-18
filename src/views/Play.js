import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleList } from '../api/data/listData';
import SingleWord from '../components/SingleWord';
import { createUserBadge, getBadgeByListId } from '../api/data/badgeData';

export default function Play({ user }) {
  const [playList, setPlayList] = useState({});
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(1);
  const [word, setWord] = useState('');
  const [results, setResults] = useState('');
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
      setWord(list.word_1);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCorrect = () => {
    if (current < 6) {
      setCurrent(current + 1);
      setScore(score + 1);
      setWord(playWords[current]);
    } else if (score === 5 && current === 6) {
      setScore(6);
      setResults('You did it!');
      getBadgeByListId(playList.firebaseKey).then((badgeObj) => createUserBadge({
        user_id: user.uid,
        badge_id: badgeObj.firebaseKey,
      }));
      console.warn(user.fullName);
    } else if (score === 6) {
      setResults('You got them all! Try another list!');
    } else {
      console.warn(`you missed ${current - score - 1}`);
      setResults(`You missed ${current - score - 1}.`);
    }
  };

  const handleWrong = () => {
    if (current < 6) {
      setCurrent(current + 1);
      setWord(playWords[current]);
    } else {
      setCurrent(6);
      setResults(`You missed ${current - score}.`);
    }
  };

  return (
    <div className="text-center">
      <h1>{playList.name}</h1>
      <h2 className="text-muted">Word {current}</h2>
      <SingleWord word={word} />
      <div className="btn-group">
        <button
          type="button"
          onClick={handleWrong}
          className="btn btn-outline-danger"
        >
          Wrong
        </button>
        <button
          type="button"
          onClick={handleCorrect}
          className="btn btn-outline-primary"
        >
          Right
        </button>
      </div>
      <h3>{results}</h3>
    </div>
  );
}

Play.defaultProps = {
  user: null,
};
Play.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
