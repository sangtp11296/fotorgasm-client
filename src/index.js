import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import allReducers from './Redux/reducers/';

const store = configureStore(allReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


