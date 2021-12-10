import React from 'react';
import PropTypes from 'prop-types';

export default function Badges({ badge }) {
  return (
    <div>
      <img src={badge.imgUrl} alt="badge" width="30px" />
      <h4>{badge.name}</h4>
    </div>
  );
}

Badges.defaultProps = {
  badge: {},
};

Badges.propTypes = {
  badge: PropTypes.shape(PropTypes.obj),
};
