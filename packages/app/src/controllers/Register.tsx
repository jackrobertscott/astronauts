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

export const Register: FunctionComponent<{}> = () => {
  const { value, execute } = useConnection<IGetUser>({
    connection: queryConnection({
      defaults: {
        query: GetUser,
      },
    }),
  });
  useEffect(() => execute(), []);
  return (
    <Main>
      <Input label="Username" placeholder="E.g. jack" />
      <Input label="Password" placeholder="**********" />
      <Input label="Email" placeholder="E.g. jack@example.com" />
      <Frame
        styles={{
          direction: 'right',
          force: 'between',
        }}
      >
        <Button value="Register" />
        <Button value="Login" subtle={true} />
      </Frame>
    </Main>
  );
};
