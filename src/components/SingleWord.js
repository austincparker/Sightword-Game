import React from 'react';
import PropTypes from 'prop-types';

export default function SingleWord({ list }) {
  return (
    <div>
      <h1>{list.word_1}</h1>
    </div>
  );
}

SingleWord.defaultProps = {
  list: {},
};
SingleWord.propTypes = {
  list: PropTypes.shape(PropTypes.obj),
};
