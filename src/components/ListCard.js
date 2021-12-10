import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { deleteList } from '../api/data/listData';

export default function ListCard({ list, setLists, admin }) {
  const history = useHistory();

  const handleClick = (method) => {
    if (method === 'delete') {
      deleteList(list.firebaseKey).then(setLists);
    } else if (method === 'play') {
      history.push(`/play/${list.firebaseKey}`);
    }
  };

  return (
    <div className="m-4">
      <img src={list.badgeUrl} alt="badge" width="50px" />
      <h5>{list.name}</h5>
      <p>{list.grade}</p>
      <p>{list.word_1}</p>
      <p>{list.word_2}</p>
      <p>{list.word_3}</p>
      <p>{list.word_4}</p>
      <p>{list.word_5}</p>
      <p>{list.word_6}</p>
      {admin ? (
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
      ) : (
        <div>
          <button
            type="button"
            onClick={() => handleClick('play')}
            className="btn btn-outline-primary"
          >
            Play
          </button>
        </div>
      )}
    </div>
  );
}

ListCard.defaultProps = {
  list: {},
  setLists: () => {},
  admin: null,
};

ListCard.propTypes = {
  list: PropTypes.shape(PropTypes.obj),
  setLists: PropTypes.func,
  admin: PropTypes.shape(PropTypes.obj),
};
