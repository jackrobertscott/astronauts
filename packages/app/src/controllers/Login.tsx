import React, { FunctionComponent } from 'react';
import { useConnection, useAddress, useComplex, useString } from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { Main } from '../components/Main';
import { Button } from '../components/Button';
import { Seperator } from '../components/Seperator';
import { mutation } from '../services/apollo';
import { auth } from '../services/auth';

export const LoginUser = mutation({
  action: gql`
    mutation LoginUser($credentials: UserCredentialsInput!) {
      usersLogin(credentials: $credentials) {
        token
        user {
          id
        }
      }
    }
  `,
});

export interface ILoginUser {
  usersLogin: {
    token: string;
    user: {
      id: string;
    };
  };
}

export const Login: FunctionComponent<{}> = () => {
  const address = useAddress();
  const actionLogin = useConnection<ILoginUser>({ connection: LoginUser });
  const credentials = useComplex();
  const username = useString(credentials.operate('username'));
  const password = useString(credentials.operate('password'));
  const submit = () => {
    actionLogin
      .execute({
        variables: {
          credentials: credentials.value,
        },
      })
      .then(({ usersLogin }: ILoginUser) => {
        const data = { token: usersLogin.token };
        auth.save(data);
        address.change('/account');
      })
      .catch(() => {
        localStorage.removeItem('auth');
      });
  };
  return (
    <Main>
      <Input {...username} label="Username" placeholder="E.g. jack" />
      <Input
        {...password}
        label="Password"
        placeholder="**********"
        type="password"
      />
      <Seperator>
        <Button value="Login" click={submit} />
        <Button
          value="Register"
          click={() => address.change('/register')}
          subtle={true}
        />
      </Seperator>
    </Main>
  );
};
