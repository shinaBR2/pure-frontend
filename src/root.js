import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import getFirebase from './firebase';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apollo';

const initialState = {
  firebase: null,
  user: null
};

const FirebaseContext = React.createContext({
  ...initialState
});

class RootElement extends React.Component {
  state = {
    ...initialState
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const analytics = import('firebase/analytics');

    Promise.all([app, auth, analytics]).then((values) => {
      const firebase = getFirebase(values[0]);
      this.setState({ firebase });

      firebase.analytics();
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.setState({ user: null });
        } else {
          this.setState({ user });

          user.getIdToken().then((token) => {
            if (typeof window !== 'undefined') {
              localStorage.setItem('token', token);
            }
          });
        }
      });
    });
  }

  render = () => {
    const { firebase, user } = this.state;
    if (!firebase) {
      // For sure all thing need to be render only on client side
      return null;
    }

    return (
      <FirebaseContext.Provider value={{ firebase, user }}>
        <ApolloProvider client={apolloClient}>
          <ErrorBoundary>{this.props.children}</ErrorBoundary>
        </ApolloProvider>
      </FirebaseContext.Provider>
    );
  };
}

export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {({ firebase, user }) => (
      <Component {...props} user={user} firebase={firebase} />
    )}
  </FirebaseContext.Consumer>
);

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);
