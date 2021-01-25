/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(prop) => (
        <Component
          {...prop}
        />
      )}
    />
  );
};

PublicRoute.propTypes = {
  // Component: PropTypes.instanceOf(Route),
};

PublicRoute.defaultProps = {
  // Component: () => <div />,
};

export default PublicRoute;
