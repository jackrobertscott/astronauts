import React, { useEffect } from 'react';
import { useConnection, Frame } from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { queryConnection } from '../services/queryConnection';
import { Main } from '../components/Main';
import { Button } from '../components/Button';

interface IGetUser {
  projectsAll: Array<{
    id: string;
    name: string;
  }>;
}

const query = gql`
  query GetUser {
    projectsAll {
      id
      name
    }
  }
`;

export default () => {
  const { value, execute } = useConnection<IGetUser>({
    connection: queryConnection,
    defaults: { query },
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
        <Button value="Sign In" />
        <Button value="Create Account" subtle={true} />
      </Frame>
    </Main>
  );
};
