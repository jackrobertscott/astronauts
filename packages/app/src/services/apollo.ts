import ApolloClient, { Operation } from 'apollo-boost';
import config from '../config';
import { authStore } from './authStore';

const authenticateRequests = (operation: Operation) => {
  const { token } = authStore.state();
  console.log('token:', token);
  if (token) {
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  }
};

export default new ApolloClient({
  uri: config.urls.api,
  request: authenticateRequests as () => any,
});
