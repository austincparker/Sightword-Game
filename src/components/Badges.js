import React from 'react';
import PropTypes from 'prop-types';
import { deleteBadge } from '../api/data/badgeData';

export default function Badges({ badge, admin, setBadges }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteBadge(badge.firebaseKey).then(setBadges);
    } else if (method === 'edit') {
      console.warn('edit badge');
    }
  };

  return (
    <div className="card" style={{ width: 200 }}>
      <img src={badge.imgUrl} alt="badge" width="30px" />
      <h4>{badge.name}</h4>
      {admin ? (
        <button
          onClick={() => handleClick('delete')}
          type="button"
          className="btn btn-outline-danger"
        >
          DELETE
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

Badges.defaultProps = {
  badge: {},
};

Badges.propTypes = {
  badge: PropTypes.shape(PropTypes.obj),
};

Badges.defaultProps = {
  badge: {},
  setBadges: () => {},
  admin: null,
};

Badges.propTypes = {
  badge: PropTypes.shape(PropTypes.obj),
  setBadges: PropTypes.func,
  admin: PropTypes.shape(PropTypes.obj),
};
