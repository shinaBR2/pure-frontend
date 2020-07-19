import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import { getItem } from './helpers/common/storageHelper';
// import { print } from 'graphql/language/printer';
// import { onSignOut } from './firebase';

const request = async (operation) => {
  const token = getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
};
const onError = ({ firebase }) => ({
  graphQLErrors,
  networkError
  // operation
}) => {
  // const query = print(operation.query);

  if (graphQLErrors) {
    // TODO
    // Capture error
  }
  if (networkError) {
    // TODO
    // Capture error

    if (firebase) {
      // TODO
    }

    // TODO
    // logoutUser();
  }
};

export const getClient = ({ firebase, user }) => {
  // console.log('Apollo Client was called to init');
  return new ApolloClient({
    fetch,
    uri: process.env.MOCK_API_URL,
    request,
    onError: onError({ firebase, user })
  });
};
