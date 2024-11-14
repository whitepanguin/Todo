import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux 추가
import { legacy_createStore as creatStore} from 'redux';
import { Provider } from 'react-redux';
import {devToolsEnhancer} from '@redux-devtools/extension';
import rootReducer from './modules';
const store = creatStore(rootReducer,devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
