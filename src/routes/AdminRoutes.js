import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminView from '../views/AdminView';

export default function AdminRoutes({ admin }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <AdminView admin={admin} />} />
      </Switch>
    </div>
  );
}

AdminRoutes.defaultProps = {
  admin: null,
};
AdminRoutes.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};
