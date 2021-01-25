import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from 'src/reducers';
import { createBrowserHistory } from 'history';
import { Map } from 'immutable';

export const history = createBrowserHistory();

// for hot reloading
/* With hot module reloading enabled, only the reducer you changed would be reloaded, allowing you to change your code without resetting the state every time. This makes for a much faster development process. */
export default function configureStore(preloadedState) {

  const initialState = Map();
  const enhancers = [];
  const middleware = [
    thunk,
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const store = createStore(
    connectRouter(history)(rootReducer(history)),
    /* preloadedState, */ preloadedState || initialState,
    /* composedEnhancers */ composedEnhancers,
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('src/reducers', () => store.replaceReducer(rootReducer(history)));
  }

  return store;
}

