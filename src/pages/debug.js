import React, { Component } from 'react';

import { getUiConfig, onSignOut } from '../firebase';
import { withFirebase } from '../root';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { MOCK_CLIENT_SIDE_QUERY } from '../queries/mock';

const WithMockQuery = (AnyComponent) => (props) => {
  const { loading, error, data } = useQuery(MOCK_CLIENT_SIDE_QUERY);
  const [getMockData, { loading: lazyLoading, data: lazyData }] = useLazyQuery(
    MOCK_CLIENT_SIDE_QUERY
  );
  const query = {
    loading,
    error,
    data
  };
  const lazyQuery = {
    getMockData,
    lazyLoading,
    lazyData
  };

  return <AnyComponent {...props} query={query} lazyQuery={lazyQuery} />;
};

class DebugPage extends Component {
  render = () => {
    const { firebase, user, lazyQuery } = this.props;
    const { getMockData } = lazyQuery;
    const signOut = () => {
      onSignOut(firebase);
    };

    if (!firebase) return null;

    if (!user) {
      return (
        <div>
          <StyledFirebaseAuth
            uiConfig={getUiConfig(firebase)}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }

    return (
      <div>
        Current user: {user && user.email}{' '}
        <button onClick={getMockData}>Click to call API, see in console</button>
        <button onClick={signOut}>signOut</button>
      </div>
    );
  };
}

export default WithMockQuery(withFirebase(DebugPage));
