import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth } from './SecureRoute';
import Loading from './Loading';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<RequiredAuth />} />
      <Route path="login/callback" element={<LoginCallback loadingElement={<Loading />} />} />
      <Route path="/home" element={<RequiredAuth />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
