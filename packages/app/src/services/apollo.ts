import ApolloClient, { Operation, DocumentNode } from 'apollo-boost';
import config from '../config';
import { createConnection } from 'nuggets';
import { auth } from './auth';

export const apollo = new ApolloClient({
  uri: config.urls.api,
  request: async (operation: Operation) => {
    const { token } = auth.access();
    if (token) {
      operation.setContext({
        headers: {
          authorization: token,
        },
      });
    }
  },
});

export interface IApolloOptions {
  action: DocumentNode;
  variables?: {
    [name: string]: string | number | boolean | undefined;
  };
}

export const mutation = createConnection<IApolloOptions>({
  handler: ({ action, variables }) => {
    return apollo
      .mutate({ mutation: action, variables })
      .then(({ data }) => data);
  },
});

export const query = createConnection<IApolloOptions>({
  handler: ({ action, variables }) => {
    return apollo.query({ query: action, variables }).then(({ data }) => data);
  },
});
