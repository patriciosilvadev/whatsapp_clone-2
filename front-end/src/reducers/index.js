import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import loginAuth from './Auth';
import getContact from './Contact';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  loginAuth,
  getContact,
});


export default rootReducer;
