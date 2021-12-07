import React from 'react';
import PropTypes from 'prop-types';

export default function ListCard({ list }) {
  return (
    <div className="m-2">
      <h5>{list.name}</h5>
      <p>{list.grade}</p>
      <p>{list.word_1}</p>
      <p>{list.word_2}</p>
      <p>{list.word_3}</p>
      <p>{list.word_4}</p>
      <p>{list.word_5}</p>
      <p>{list.word_6}</p>
    </div>
  );
}

ListCard.defaultProps = {
  list: {},
};

ListCard.propTypes = {
  list: PropTypes.shape(PropTypes.obj),
};
