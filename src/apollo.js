import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
const getToken = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : '';
};

const client = new ApolloClient({
  fetch,
  uri: process.env.MOCK_API_URL,
  request: async (operation) => {
    const token = getToken();
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
});

export default client;
