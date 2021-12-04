import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
      <h1>You are not an admin, {user.fullName}</h1>
    </div>
  );
}

Home.defaultProps = {
  user: null,
};
Home.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
