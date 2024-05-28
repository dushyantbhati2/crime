import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './Rastaa';
import { RouterProvider } from 'react-router-dom';
import Rastaa from './Rastaa';
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    
  <React.StrictMode>
   <App />
  </React.StrictMode>
  </AuthProvider>
);


