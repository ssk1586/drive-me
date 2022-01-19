import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function PrivateRoute({ children }) {
  const isUserAuth = Cookies.get('user');

  return isUserAuth 
    ? children
    : <Navigate to="/signIn" replace />;
}

export default PrivateRoute;