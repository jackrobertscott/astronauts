import { createConnection } from 'nuggets';
import apollo from './apollo';

export interface IQueryConnection {
  mutation: string;
  variables: {
    [name: string]: string | number | boolean | undefined;
  };
}

export const mutationConnection = createConnection({
  handler: ({ action, variables }) => {
    return apollo
      .mutate({ mutation: action, variables })
      .then(({ data }) => data);
  },
});
