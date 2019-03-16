import { createConnection } from 'nuggets';
import apollo from './apollo';

export interface IQueryConnection {
  query: string;
  variables: {
    [name: string]: string | number | boolean | undefined;
  };
}

export const queryConnection = createConnection({
  handler: ({ query, variables }) => {
    return apollo.query({ query, variables }).then(({ data }) => data);
  },
});
