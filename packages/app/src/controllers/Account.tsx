import React, { FunctionComponent, useEffect } from 'react';
import { useConnection, useComplex, useString } from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { Main } from '../components/Main';
import { Button } from '../components/Button';
import { query, mutation } from '../services/apollo';

export const LoadUserAccount = query({
  action: gql`
    query LoadUserAccount {
      usersMe {
        id
        name
        username
        email
      }
    }
  `,
});

export interface ILoadUserAccount {
  usersMe: {
    id: string;
    name: string;
    username: string;
    email: string;
  };
}

export const SaveUserAccount = mutation({
  action: gql`
    mutation SaveUserAccount($id: String!, $values: UserValuesInput!) {
      usersEdit(id: $id, values: $values) {
        id
      }
    }
  `,
});

export interface ISaveUserAccount {
  usersEdit: {
    id: string;
  };
}

export const Account: FunctionComponent<{}> = () => {
  const actionLoadUserAccount = useConnection<ILoadUserAccount>({
    connection: LoadUserAccount,
  });
  const actionSaveUserAccount = useConnection<ISaveUserAccount>({
    connection: SaveUserAccount,
  });
  useEffect(() => {
    actionLoadUserAccount.execute();
  }, []);
  const me = actionLoadUserAccount.value && actionLoadUserAccount.value.usersMe;
  const account = useComplex({ value: me });
  const name = useString(account.operate('name'));
  const email = useString(account.operate('email'));
  const submit = () => {
    actionSaveUserAccount.execute({
      variables: {
        id: me && me.id,
        values: {
          name: account.value && account.value.name,
          email: account.value && account.value.email,
        },
      },
    });
  };
  return (
    <Main>
      <Input {...name} label="Name" placeholder="E.g. Jack Scott" />
      <Input {...email} label="Email" placeholder="E.g. jack@example.com" />
      <Button value="Save" click={submit} />
    </Main>
  );
};
