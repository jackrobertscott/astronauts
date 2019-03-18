import React, { FunctionComponent, useEffect } from 'react';
import { useAddress, useStore } from 'nuggets';
import { Login } from './Login';
import { Register } from './Register';
import { Account } from './Account';
import { authStore } from '../services/authStore';

export interface IMainProps {}

export const Main: FunctionComponent<IMainProps> = () => {
  const storeAuth = useStore({ store: authStore });
  useEffect(() => {
    try {
      const data = localStorage.getItem('auth');
      if (data) {
        const okay = JSON.parse(data);
        storeAuth.change(okay);
      }
    } catch (e) {
      localStorage.removeItem('auth');
    }
  }, []);
  const { match } = useAddress();
  const current = [
    { path: '/login', exact: true, route: Login },
    { path: '/register', route: Register },
    { path: '/account', route: Account, guard: () => !!storeAuth.value.token },
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
