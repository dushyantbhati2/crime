import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './Rastaa';
import { RouterProvider } from 'react-router-dom';
import Rastaa from './Rastaa';
import { AuthProvider } from './context/AuthContext';
import {Provider} from "react-redux";
import { store } from './01Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App />
  </Provider>
);


