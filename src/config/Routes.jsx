import React from 'react';

import {
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
  
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

function Routes() {
  return(
    <>
        <RoutesWrapper>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signIn" element={<SignIn />} />
        </RoutesWrapper>
    </>
  )
}

export default Routes;

// import { lazy, Suspense } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from 'react-router-dom';
// import Loader from 'shareComponent/Loader';
// import ProtectedRoutes from 'routes/ProtectedRoutes'; //Authenticated routes
// import PublicRoute from 'routes/PublicRoute'; 
// import PrivateRoute from 'routes/PrivateRoute'; 

// const LoginPage = lazy(() => import('components/LoginPage'));
// const Register = lazy(() => import('components/Register'));
// const ForgotPassword = lazy(() => import('components/ForgotPassword'));
// const NoFoundComponent = lazy(() => import('components/NoFoundComponent'));

// const App = () => {
//   const isAuthenticated = getToken();

//   return (
//     <Router>
//       <Suspense fallback={<Loader />}>
//         <Switch>
//           <PublicRoute
//             path="/login"
//             isAuthenticated={isAuthenticated}
//           >
//             <LoginPage />
//           </PublicRoute>
//           <PublicRoute
//             path="/register"
//             isAuthenticated={isAuthenticated}
//           >
//             <Register />
//           </PublicRoute>
//           <PublicRoute
//             path="/forgot-password"
//             isAuthenticated={isAuthenticated}
//           >
//             <ForgotPassword />
//           </PublicRoute>
//           <PrivateRoute
//             path="/"
//             isAuthenticated={isAuthenticated}
//           >
//             <ProtectedRoutes />
//           </PrivateRoute>
//           <Route path="*">
//             <NoFoundComponent />
//           </Route>
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;
