import React, { useEffect, FunctionComponent } from 'react';
import { useConnection, Frame } from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { queryConnection } from '../services/queryConnection';
import { Main } from '../components/Main';
import { Button } from '../components/Button';

export interface IGetUser {
  projectsAll: Array<{
    id: string;
    name: string;
  }>;
}

export const GetUser = gql`
  query GetUser {
    projectsAll {
      id
      name
    }
  }
`;

export const Login: FunctionComponent<{}> = () => {
  const { value, execute } = useConnection<IGetUser>({
    connection: queryConnection,
    defaults: {
      query: GetUser,
    },
  });
  useEffect(() => execute(), []);
  return (
    <Main>
      <Input label="Username" placeholder="E.g. jack" />
      <Input label="Password" placeholder="**********" />
      <Frame
        styles={{
          direction: 'right',
          force: 'between',
        }}
      >
        <Button value="Login" />
        <Button value="Register" subtle={true} />
      </Frame>
    </Main>
  );
};
