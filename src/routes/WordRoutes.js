import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Word1 from '../components/Word1';

export default function WordRoutes({ list }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/play/:key/word1"
          component={() => <Word1 list={list} />}
        />
      </Switch>
    </div>
  );
}

WordRoutes.defaultProps = {
  list: {},
};
WordRoutes.propTypes = {
  list: PropTypes.shape(PropTypes.obj),
};
