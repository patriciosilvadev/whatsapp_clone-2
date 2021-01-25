/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute from 'src/components/PublicRoute';
import PrivateRoute from 'src/components/PrivateRoute';
import Home from './Home';
import Login from './Login';
import ChatRoom from './ChatRoom';


const routePublic = [
  //* all public route goes here
  { exact: true, path: '/home', component: Home },
  { exact: true, path: '/login', component: Login },
];

const routePrivate = [
  //* all public route goes here
  { exact: true, path: '/', component: ChatRoom },
];

const publicRouting = routePublic.map((props, key) => (
  <PublicRoute
    {...props}
    key={key}
  />
));

const privateRouting = routePrivate.map((props, key) => (
  <PrivateRoute
    {...props}
    key={key}
  />
));


const App = () => (
  <Switch>
    {publicRouting}
    {privateRouting}
  </Switch>
);

export default App;
