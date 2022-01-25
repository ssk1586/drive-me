import React from 'react';

import {
  Routes as RoutesWrapper,
  Route,
  BrowserRouter
} from "react-router-dom";
  
import Home from '../pages/Home';
import AboutUser from '../pages/AboutUser';
import SignIn from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'; 
import Settings from '../pages/Settings';


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
            path="/aboutUser/:id"
            element={
              <PrivateRoute>
                <AboutUser/>
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings/>
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

