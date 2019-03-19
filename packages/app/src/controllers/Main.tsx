import React, { FunctionComponent } from 'react';
import { useAddress } from 'nuggets';
import { Login } from './Login';
import { Register } from './Register';
import { Account } from './Account';
import { Developers } from './Developers';
import { auth } from '../services/auth';

export interface IMainProps {}

export const Main: FunctionComponent<IMainProps> = () => {
  const address = useAddress();
  const current = [
    { path: '/login', route: Login },
    { path: '/register', route: Register },
    { path: '/account', route: Account, private: true },
    {
      path: '/developers',
      route: Developers,
      private: true,
    },
  ].find(address.match);
  if (!current) {
    address.change('/login');
    return <div>Loading...</div>;
  }
  if (current.private && !auth.access().token) {
    address.change('/login');
    return <div>Loading...</div>;
  }
  const { route: Component } = current;
  return <Component />;
};
