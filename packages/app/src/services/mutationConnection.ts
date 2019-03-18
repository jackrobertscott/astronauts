import { createConnection } from 'nuggets';
import { DocumentNode } from 'graphql';
import apollo from './apollo';

export interface IMutationConnection {
  action: DocumentNode;
  variables?: {
    [name: string]: string | number | boolean | undefined;
  };
}

export const mutationConnection = createConnection<IMutationConnection>({
  handler: ({ action, variables }) => {
    return apollo
      .mutate({ mutation: action, variables })
      .then(({ data }) => data);
  },
});
