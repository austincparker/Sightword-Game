import React from 'react';
import PropTypes from 'prop-types';

export default function Badges({ badge }) {
  return (
    <div className="card" style={{ width: 200 }}>
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
