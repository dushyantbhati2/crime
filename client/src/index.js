import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './Rastaa';
import { RouterProvider } from 'react-router-dom';
import Rastaa from './Rastaa';
import { AuthProvider } from './context/AuthContext';
import {store} from './redux/store'
import {Provider} from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
  <React.StrictMode>
   <App />
  </React.StrictMode>
  </Provider>
);


