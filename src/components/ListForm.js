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
  badgeUrl: '',
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
      updateList(editItem.firebaseKey, formInput).then(history.push('/'));
      //   updateProject(obj.firebaseKey, formInput).then(() => {
      resetForm();
      //     history.push('/projects');
      // })
    } else {
      createList({ ...formInput }).then(setLists);
      // history.push('/');
      resetForm();
    }
  };

  return (
    <div>
      <h3 className="my-4">Make a New List</h3>
      <div>
        <form onSubmit={handleSubmit} className="ms-2 mb-4 list-form">
          <div>
            <label htmlFor="name" className="form-label">
              List Name
              <input
                id="name"
                name="name"
                value={formInput.name}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="grade" className="form-label">
              List Grade
              <input
                id="grade"
                name="grade"
                value={formInput.grade}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_1" className="form-label">
              Word 1
              <input
                id="word_1"
                name="word_1"
                value={formInput.word_1}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_2" className="form-label">
              Word 2
              <input
                id="word_2"
                name="word_2"
                value={formInput.word_2}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_3" className="form-label">
              Word 3
              <input
                id="word_3"
                name="word_3"
                value={formInput.word_3}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_4" className="form-label">
              Word 4
              <input
                id="word_4"
                name="word_4"
                value={formInput.word_4}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_5" className="form-label">
              Word 5
              <input
                id="word_5"
                name="word_5"
                value={formInput.word_5}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="word_6" className="form-label">
              Word 6
              <input
                id="word_6"
                name="word_6"
                value={formInput.word_6}
                onChange={handleChange}
                required
                className="form-control list-inputs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="badgeUrl" className="form-label">
              Badge Image Url
              <input
                id="badgeUrl"
                name="badgeUrl"
                value={formInput.badgeUrl}
                onChange={handleChange}
                className="form-control list-inputs"
              />
            </label>
          </div>
          <button className="btn btn-success mt-1" type="submit">
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
