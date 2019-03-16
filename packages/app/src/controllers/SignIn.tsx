import React, { useEffect } from 'react';
import { useConnection } from 'nuggets';
import gql from 'graphql-tag';
import Example from '../components/Example';
import { queryConnection } from '../services/queryConnection';

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
  console.log(
    value && value.projectsAll && value.projectsAll.map(item => item.name)
  );
  return <Example />;
};
