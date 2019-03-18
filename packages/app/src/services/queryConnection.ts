import { createConnection } from 'nuggets';
import { DocumentNode } from 'graphql';
import apollo from './apollo';

export interface IQueryConnection {
  action: DocumentNode;
  variables?: {
    [name: string]: string | number | boolean | undefined;
  };
}

export const queryConnection = createConnection<IQueryConnection>({
  handler: ({ action, variables }) => {
    return apollo.query({ query: action, variables }).then(({ data }) => data);
  },
});
