import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isUserAuth = localStorage.getItem('user');

  return isUserAuth
    ? children
    : <Navigate to="/signIn" replace />;
}

export default PrivateRoute;