import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createBadge } from '../api/data/badgeData';

const initialState = {
  firebaseKey: '',
  name: '',
  level: '',
  imgUrl: '',
  list_id: '',
};

export default function BadgeForm({ editItem, setBadges }) {
  const [formInput, setFormInput] = useState(initialState);

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
      console.warn(editItem);
    } else {
      createBadge({ ...formInput }).then(() => setBadges);
      resetForm();
    }
  };

  return (
    <div>
      <h3>Badge Form</h3>
      <div>
        <form onSubmit={handleSubmit} className="ms-2">
          <div>
            <label htmlFor="bname">
              Badge Name
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="bname"
                name="bname"
                value={formInput.name}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="level">
              Bradge Level
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                id="level"
                name="level"
                value={formInput.level}
                onChange={handleChange}
                required
                className="m-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="imgUrl">
              Badge Image Url
              <input
                style={{
                  border: '2px solid black',
                  height: '2rem',
                  width: '30rem',
                }}
                type="url"
                id="imgUrl"
                name="imgUrl"
                value={formInput.imgUrl}
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

BadgeForm.defaultProps = {
  editItem: {},
  setBadges: () => {},
};

BadgeForm.propTypes = {
  editItem: PropTypes.shape(PropTypes.obj),
  setBadges: PropTypes.func,
};
