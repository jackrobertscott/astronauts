import React from 'react';
import { useAddress } from 'nuggets';
import { Login } from './Login';
import { Register } from './Register';
import { Account } from './Account';

export default () => {
  const { pathname, match } = useAddress();
  const current = [
    { path: '/login', exact: true, route: Login },
    { path: '/register', route: Register },
    { path: '/account', route: Account },
  ].find(({ path, exact }) => match(path, { exact }));
  const Component = current ? current.route : () => <div>Not found.</div>;
  return <Component />;
};
