import { useAddress } from 'nuggets';

export default () => {
  const { pathname } = useAddress();
  // const { route } = [
  //   { path: '/dashboard', exact: true, route: <Dashboard /> },
  //   { path: '/settings', route: <Settings /> },
  //   { path: '/login', route: <Login /> },
  //   { path: '/sign-up', route: <SignUp /> },
  // ].find(({ path, exact }) => match({ path, exact }));
  // return route || <NotFound />;
  return <div>Hello</div>;
};
