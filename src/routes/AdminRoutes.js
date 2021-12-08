import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminView from '../views/AdminView';
import Edit from '../views/Edit';

export default function AdminRoutes({ admin }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <AdminView admin={admin} />} />
        <Route exact path="/edit/:key" component={() => <Edit />} />
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
