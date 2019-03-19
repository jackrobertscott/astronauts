import React, { FunctionComponent, useEffect } from 'react';
import { useAddress, useStore } from 'nuggets';
import { Login } from './Login';
import { Register } from './Register';
import { Account } from './Account';
import { Developers } from './Developers';
import { auth } from '../services/auth';

export interface IMainProps {}

export const Main: FunctionComponent<IMainProps> = () => {
  const { match } = useAddress();
  const current = [
    { path: '/login', exact: true, route: Login },
    { path: '/register', route: Register },
    { path: '/account', route: Account, guard: () => !!auth.access().token },
    {
      path: '/developers',
      route: Developers,
      guard: () => !!auth.access().token,
    },
  ].find(({ path, exact }) => match(path, { exact }));
  if (current) {
    const Component = current.route;
    if (current.guard && !current.guard()) {
      return <div>No access.</div>;
    }
    return <Component />;
  }
  return <div>Not found.</div>;
};
