import React from 'react';

import {
  Routes as RoutesWrapper,
  Route,
  BrowserRouter
} from "react-router-dom";
  
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'; 

function Routes() {
  return (
    <>
      <BrowserRouter>
        <RoutesWrapper>
          <Route
            path="/signIn"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/error"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </RoutesWrapper>
      </BrowserRouter>
    </>
  );
};
export default Routes;

