import React, { FunctionComponent } from 'react';
import {
  useConnection,
  useAddress,
  useComplex,
  useString,
  Text,
} from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { queryConnection } from '../services/queryConnection';
import { Main } from '../components/Main';
import { Button } from '../components/Button';
import { Seperator } from '../components/Seperator';
import { mutationConnection } from '../services/mutationConnection';

export const LoginUser = gql`
  mutation LoginUser($credentials: UserCredentialsInput!) {
    usersLogin(credentials: $credentials) {
      token
      user {
        id
      }
    }
  }
`;

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
  const actionLogin = useConnection<ILoginUser>({
    connection: mutationConnection({ action: LoginUser }),
  });
  const credentials = useComplex();
  const username = useString(credentials.operate('username'));
  const password = useString(credentials.operate('password'));
  const submit = () => {
    actionLogin.execute({
      variables: {
        credentials: credentials.value,
      },
    });
  };
  return (
    <Main>
      <Input {...username} label="Username" placeholder="E.g. jack" />
      <Input {...password} label="Password" placeholder="**********" />
      {actionLogin.error && <Text value={actionLogin.error.message} />}
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
