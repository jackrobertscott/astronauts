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
    <Frame
      styles={{
        space: {
          top: 20,
        },
      }}
    >
      {actionLoadMembers.value &&
        actionLoadMembers.value.membershipsAll.map(({ id, user }) => (
          <Frame
            key={id}
            styles={{
              space: 10,
              corners: 3,
              borders: {
                color: '#FFFFFF',
              },
            }}
          >
            <Text styles={{ color: '#FFFFFF' }} value={user.name} />
          </Frame>
        ))}
    </Frame>
  );
};
