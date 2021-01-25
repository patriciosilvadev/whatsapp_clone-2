/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getLocalStorage } from 'src/utils/helper';

const PrivateRoute = (props) => {
  const { component: Component, path, ...rest } = props;

  const token = getLocalStorage('token');

  return (
    <Route
      {...rest}
      path={path}
      render={
        (prop) => token
          ? <Component {...prop} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  // Component: PropTypes.instanceOf(Route),
};

PrivateRoute.defaultProps = {
  // Component: () => <div />,
};

export default PrivateRoute;
