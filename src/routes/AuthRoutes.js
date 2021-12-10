import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Play from '../views/Play';

export default function AuthRoutes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route exact path="/play/:key" component={() => <Play user={user} />} />
      </Switch>
    </div>
  );
}

AuthRoutes.defaultProps = {
  user: null,
};
AuthRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
