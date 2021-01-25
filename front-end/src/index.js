import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore, { history } from './store';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './pages';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('src/pages', renderApp);
}

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
