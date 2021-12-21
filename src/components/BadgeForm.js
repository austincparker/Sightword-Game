import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createBadge } from '../api/data/badgeData';
import { getLists } from '../api/data/listData';

const initialState = {
  firebaseKey: '',
  badge_name: '',
  level: '',
  imgUrl: '',
  list_id: '',
};

export default function BadgeForm({ editItem, setBadges }) {
  const [formInput, setFormInput] = useState(initialState);
  const [selectLists, setSelectLists] = useState([]);

  useEffect(() => {
    if (editItem.firebaseKey) {
      setFormInput(editItem);
      getLists().then(setSelectLists);
    } else {
      setFormInput(initialState);
      getLists().then(setSelectLists);
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
      console.warn(editItem);
    } else {
      console.warn(formInput);
      createBadge({ ...formInput }).then(setBadges);
      resetForm();
    }
  };

  return (
    <div className="my-4">
      <h3>Make a New Badge</h3>
      <div>
        <form onSubmit={handleSubmit} className="ms-2 mb-4 badge-form">
          <div>
            <label htmlFor="bname" className="form-label">
              Badge Name
              <input
                id="badge_name"
                name="badge_name"
                value={formInput.badge_name}
                onChange={handleChange}
                required
                className="form-control badge-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="level" className="form-label">
              Badge Level
              <input
                id="level"
                name="level"
                value={formInput.level}
                onChange={handleChange}
                required
                className="form-control badge-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="imgUrl">
              Badge Image Url
              <input
                type="url"
                id="imgUrl"
                name="imgUrl"
                value={formInput.imgUrl}
                onChange={handleChange}
                className="form-control badge-input"
              />
            </label>
          </div>
          <div className="m-2">
            <label>
              For Which List?
              <select
                name="list_id"
                value={formInput.list_id}
                onChange={handleChange}
                className="form-select m-auto badge-input"
                aria-label="Default select example"
                required
              >
                <option defaultValue>Select List</option>
                {selectLists.map((list) => (
                  <option value={list.firebaseKey} key={list.firebaseKey}>
                    {list.name}
                  </option>
                ))}
                ;
              </select>
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

BadgeForm.defaultProps = {
  editItem: {},
  setBadges: () => {},
};

BadgeForm.propTypes = {
  editItem: PropTypes.shape(PropTypes.obj),
  setBadges: PropTypes.func,
};
