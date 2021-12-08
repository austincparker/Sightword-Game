import React from 'react';
import PropTypes from 'prop-types';

export default function SingleWord({ list }) {
  return (
    <div className="container play-card text-center p-5">
      <h1 className="display-1">{list.word_1}</h1>
      <button type="button">wrong</button>
      <button type="button">right</button>
    </div>
  );
}

SingleWord.defaultProps = {
  list: {},
};
SingleWord.propTypes = {
  list: PropTypes.shape(PropTypes.obj),
};
