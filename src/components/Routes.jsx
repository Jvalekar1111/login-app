import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth } from './SecureRoute';
import Loading from './Loading';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login-app/" exact element={<RequiredAuth />} />
      <Route path="/login-app/login/callback" element={<LoginCallback loadingElement={<Loading />} />} />
      <Route path="/login-app/home" element={<RequiredAuth />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
