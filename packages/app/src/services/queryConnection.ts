import { createConnection } from 'nuggets';
import apollo from './apollo';

export interface IQueryConnection {
  action: string;
  variables: {
    [name: string]: string | number | boolean | undefined;
  };
}

export const queryConnection = createConnection({
  handler: ({ action, variables }) => {
    return apollo.query({ query: action, variables }).then(({ data }) => data);
  },
});
