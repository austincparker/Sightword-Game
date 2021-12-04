import React from 'react';
import PropTypes from 'prop-types';

export default function AdminView({ admin }) {
  return (
    <div>
      <h1>this is home, {admin.fullName}</h1>
    </div>
  );
}

AdminView.defaultProps = {
  admin: null,
};
AdminView.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};
