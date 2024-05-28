import React, { useEffect } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuth({
      ...auth,
      isAuthenticated: !!token,
    });
  }, []);

  const isAuthenticated = auth.isAuthenticated;

  return isAuthenticated ? (
    <Outlet/> 
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
