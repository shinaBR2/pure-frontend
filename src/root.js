import React from 'react';
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

    Promise.all([app, auth]).then((values) => {
      const firebase = getFirebase(values[0]);
      this.setState({ firebase });

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
    return (
      <FirebaseContext.Provider value={{ firebase, user }}>
        <ApolloProvider client={apolloClient}>
          {this.props.children}
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
