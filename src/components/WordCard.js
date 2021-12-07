import React from 'react';
import PropTypes from 'prop-types';

export default function WordCard({ word, admin }) {
  return (
    <div>
      <h5>This is the word card.{admin.fullName}</h5>
      <p>{word.name}</p>
      <p>{word.level}</p>
      <p>is it a struggle word?</p>
      {word.isStruggle ? <p>yes</p> : <p>no</p>};
    </div>
  );
}

WordCard.defaultProps = {
  word: {},
  admin: null,
};

WordCard.propTypes = {
  word: PropTypes.shape(PropTypes.obj),
  admin: PropTypes.shape(PropTypes.obj),
};
