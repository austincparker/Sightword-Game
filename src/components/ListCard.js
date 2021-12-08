import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { deleteList } from '../api/data/listData';

export default function ListCard({ list, setLists }) {
  const history = useHistory();

  const handleClick = (method) => {
    if (method === 'delete') {
      deleteList(list.firebaseKey).then(setLists);
    }
  };

  return (
    <div className="m-4">
      <h5>{list.name}</h5>
      <p>{list.grade}</p>
      <p>{list.word_1}</p>
      <p>{list.word_2}</p>
      <p>{list.word_3}</p>
      <p>{list.word_4}</p>
      <p>{list.word_5}</p>
      <p>{list.word_6}</p>
      <div>
        <button
          onClick={() => history.push(`/edit/${list.firebaseKey}`)}
          type="button"
          className="btn btn-outline-info me-1"
        >
          EDIT
        </button>
        <button
          onClick={() => handleClick('delete')}
          type="button"
          className="btn btn-outline-danger"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

ListCard.defaultProps = {
  list: {},
  setLists: () => {},
};

ListCard.propTypes = {
  list: PropTypes.shape(PropTypes.obj),
  setLists: PropTypes.func,
};
