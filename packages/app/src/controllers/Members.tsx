import React, { FunctionComponent, useEffect } from 'react';
import { useConnection, Text, Frame } from 'nuggets';
import gql from 'graphql-tag';
import { query } from '../services/apollo';

export const LoadMembers = query({
  action: gql`
    query LoadMembers($filters: MembershipFiltersInput!) {
      membershipsAll(filters: $filters) {
        id
        user {
          name
        }
      }
    }
  `,
});

export interface ILoadMembers {
  membershipsAll: Array<{
    id: string;
    user: {
      name: string;
    };
  }>;
}

export const Members: FunctionComponent<{}> = () => {
  const actionLoadMembers = useConnection<ILoadMembers>({
    connection: LoadMembers,
  });
  useEffect(() => {
    actionLoadMembers.execute({
      variables: {
        filters: {
          // add filters here...
        },
      },
    });
  }, []);
  return (
    <Frame>
      {actionLoadMembers.value &&
        actionLoadMembers.value.membershipsAll.map(({ id, user }) => (
          <Frame key={id}>
            <Text value={user.name} />
          </Frame>
        ))}
    </Frame>
  );
};
