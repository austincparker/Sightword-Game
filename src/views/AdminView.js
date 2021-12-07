import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getWords from '../api/data/wordData';
import WordCard from '../components/WordCard';

export default function AdminView({ admin }) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWords().then(setWords);
  });

  return (
    <div>
      <h1>this is home, {admin.fullName}</h1>
      <h2>Word Form</h2>
      <h2>List Cards</h2>
      <div className="word-space d-flex flex-wrap">
        <h2>Word Space</h2>
        <div>
          {words.map((word) => (
            <WordCard key={word.firebaseKey} word={word} admin={admin} />
          ))}
        </div>
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
