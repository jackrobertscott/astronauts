import React, { FunctionComponent } from 'react';
import {
  useConnection,
  useAddress,
  useComplex,
  useString,
  useStore,
} from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { Main } from '../components/Main';
import { Button } from '../components/Button';
import { Seperator } from '../components/Seperator';
import { mutationConnection } from '../services/mutationConnection';
import { authStore } from '../services/authStore';

export const RegisterUser = mutationConnection({
  action: gql`
    mutation RegisterUser($credentials: UserCredentialsInput!) {
      usersRegister(credentials: $credentials) {
        token
        user {
          id
        }
      }
    }
  `,
});

export interface IRegisterUser {
  usersRegister: {
    token: string;
    user: {
      id: string;
    };
  };
}

export const Register: FunctionComponent<{}> = () => {
  const address = useAddress();
  const actionRegister = useConnection<IRegisterUser>({
    connection: RegisterUser,
  });
  const storeAuth = useStore({ store: authStore });
  const credentials = useComplex();
  const name = useString(credentials.operate('name'));
  const username = useString(credentials.operate('username'));
  const password = useString(credentials.operate('password'));
  const email = useString(credentials.operate('email'));
  const submit = () => {
    actionRegister
      .execute({
        variables: {
          credentials: credentials.value,
        },
      })
      .then(({ usersRegister }: IRegisterUser) => {
        storeAuth.change({ token: usersRegister.token });
        address.change('/account');
      });
  };
  return (
    <Main>
      <Input {...name} label="Name" placeholder="E.g. Jack Scott" />
      <Input {...username} label="Username" placeholder="E.g. jack" />
      <Input {...password} label="Password" placeholder="**********" />
      <Input {...email} label="Email" placeholder="E.g. jack@example.com" />
      <Seperator>
        <Button value="Register" click={submit} />
        <Button
          value="Login"
          click={() => address.change('/login')}
          subtle={true}
        />
      </Seperator>
    </Main>
  );
};
