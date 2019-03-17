import React from 'react';
import { useAddress } from 'nuggets';
import { Login } from './Login';
import { Register } from './Register';

export default () => {
  const { pathname, match } = useAddress();
  const current = [
    { path: '/login', exact: true, route: <Login /> },
    { path: '/register', route: <Register /> },
  ].find(({ path, exact }) => match(path, { exact }));
  return current ? current.route : <div>Not found.</div>;
};
