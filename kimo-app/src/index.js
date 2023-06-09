import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './redux/reducers';
import { BrowserRouter } from 'react-router-dom';

// create the Redux store with the root reducer and apply the Redux thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// create a root for the React DOM renderer and render the App component wrapped in the Redux Provider and BrowserRouter components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
