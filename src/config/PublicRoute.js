import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function PublicRoute({ children }) {
  const isUserAuth = Cookies.get('user')

  return isUserAuth
    ? <Navigate to="/" replace />
    : children;
}

export default PublicRoute;

  