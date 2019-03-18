import React, { useEffect, FunctionComponent } from 'react';
import {
  useConnection,
  Frame,
  useAddress,
  useComplex,
  useString,
} from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { queryConnection } from '../services/queryConnection';
import { Main } from '../components/Main';
import { Button } from '../components/Button';
import { Seperator } from '../components/Seperator';

export const GetUser = gql`
  query GetUser {
    projectsAll {
      id
      name
    }
  }
`;

export interface IGetUser {
  projectsAll: Array<{
    id: string;
    name: string;
  }>;
}

export const Register: FunctionComponent<{}> = () => {
  const address = useAddress();
  const actionRegister = useConnection<IGetUser>({
    connection: queryConnection({ action: GetUser }),
  });
  const credentials = useComplex();
  const username = useString(credentials.operate('username'));
  const password = useString(credentials.operate('password'));
  const email = useString(credentials.operate('email'));
  const submit = () => {
    actionRegister.execute({
      variables: {
        credentials: credentials.value,
      },
    });
  };
  return (
    <Main>
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
