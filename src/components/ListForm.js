import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createList, updateList } from '../api/data/listData';

const initialState = {
  firebaseKey: '',
  name: '',
  grade: '',
  word_1: '',
  word_2: '',
  word_3: '',
  word_4: '',
  word_5: '',
  word_6: '',
  badge_url: '',
};

export default function ListForm({ editItem, setLists }) {
  const [formInput, setFormInput] = useState(initialState);

  const history = useHistory();

  useEffect(() => {
    if (editItem.firebaseKey) {
      setFormInput(editItem);
    } else {
      setFormInput(initialState);
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem.firebaseKey) {
      updateList(editItem.firebaseKey, formInput).then(() => {
        history.push('/');
      });
      //   updateProject(obj.firebaseKey, formInput).then(() => {
      resetForm();
      //     history.push('/projects');
      // })
    } else {
      createList({ ...formInput }).then(() => setLists);
      resetForm();
    }
  };

  return (
    <div>
      <h1>List Form</h1>
      <div>
        <form onSubmit={handleSubmit} className="ms-2">
          <div>
            <label htmlFor="name">
              List Name
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="name"
                name="name"
                value={formInput.name}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="grade">
              List Grade
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="grade"
                name="grade"
                value={formInput.grade}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_1">
              Word 1
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="word_1"
                name="word_1"
                value={formInput.word_1}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_2">
              Word 2
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="word_2"
                name="word_2"
                value={formInput.word_2}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_3">
              Word 3
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="word_3"
                name="word_3"
                value={formInput.word_3}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_4">
              Word 4
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="word_4"
                name="word_4"
                value={formInput.word_4}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_5">
              Word 5
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="word_5"
                name="word_5"
                value={formInput.word_5}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_6">
              Word 6
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="word_6"
                name="word_6"
                value={formInput.word_6}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="badgeUrl">
              Badge Image Url
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                type="url"
                id="badgeUrl"
                name="badgeUrl"
                value={formInput.badgeUrl}
                onChange={handleChange}
                className="m-2"
              />
            </label>
          </div>
          <button className="btn btn-success" type="submit">
            {editItem.firebaseKey ? 'Update' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
}

ListForm.defaultProps = {
  editItem: {},
  setLists: () => {},
};

ListForm.propTypes = {
  editItem: PropTypes.shape(PropTypes.obj),
  setLists: PropTypes.func,
};
