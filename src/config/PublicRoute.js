import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const isUserAuth = localStorage.getItem('user');

  return isUserAuth
    ? <Navigate to="/" replace />
    : children;
}

export default PublicRoute;

  