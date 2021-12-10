import React from 'react';
import PropTypes from 'prop-types';

export default function SingleWord({ word }) {
  return (
    <div className="container play-card text-center p-5">
      <h1 className="display-1">{word}</h1>
    </div>
  );
}

SingleWord.defaultProps = {
  word: '',
};
SingleWord.propTypes = {
  word: PropTypes.string,
};
