import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './Rastaa';
import { RouterProvider } from 'react-router-dom';
import Rastaa from './Rastaa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Rastaa />
  </React.StrictMode>
);


