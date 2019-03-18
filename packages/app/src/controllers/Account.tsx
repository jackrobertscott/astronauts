import React, { FunctionComponent, useEffect } from 'react';
import { useConnection, useComplex, useString } from 'nuggets';
import gql from 'graphql-tag';
import { Input } from '../components/Input';
import { Main } from '../components/Main';
import { Button } from '../components/Button';
import { mutationConnection } from '../services/mutationConnection';
import { queryConnection } from '../services/queryConnection';

export const LoadUserAccount = queryConnection({
  action: gql`
    mutation LoadUserAccount {
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

export const SaveUserAccount = mutationConnection({
  action: gql`
    mutation SaveUserAccount($id: String!) {
      usersEdit(id: $id) {
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
  const account = useComplex();
  const name = useString(account.operate('name'));
  const email = useString(account.operate('email'));
  const submit = () => {
    actionSaveUserAccount.execute({
      variables: {
        values: account.value,
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
