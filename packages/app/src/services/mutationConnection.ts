import { createConnection } from 'nuggets';
import apollo from './apollo';

export interface IQueryConnection {
  mutation: string;
  variables: {
    [name: string]: string | number | boolean | undefined;
  };
}

export const mutationConnection = createConnection({
  handler: ({ mutation, variables }) => {
    return apollo.mutate({ mutation, variables }).then(({ data }) => data);
  },
});
