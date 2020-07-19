import { isBrowser } from '../common/utilHelper';

const errorTypeMap = {
  graphql: 'graphQLErrors',
  render: 'ErrorBoundary',
  network: 'networkError'
};

/**
 * Reference here
 * https://getsentry.github.io/sentry-javascript/classes/core.baseclient.html#captureexception
 */
export const captureGraphQLException = ({ user, query, graphQLErrors }) => {
  if (isBrowser) {
    Sentry.configureScope(function (scope) {
      scope.setExtras({ query, graphQLErrors });

      if (user) {
        scope.setUser({
          id: user.uid,
          email: user.email
        });
      }
    });
    Sentry.captureException(new Error(graphQLErrors[0].message), {
      tags: {
        errorType: errorTypeMap.graphql
      }
    });
  }
};

export const captureNetworkException = (networkError) => {
  if (isBrowser) {
    Sentry.captureException(networkError, {
      tags: {
        errorType: errorTypeMap.network
      }
    });
  }
};

export const captureRenderException = ({ error, errorInfo }) => {
  if (isBrowser) {
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error, {
      tags: {
        errorType: 'ErrorBoundary'
      }
    });
  }
};

export const removeUserScope = () => {
  if (isBrowser) {
    Sentry.configureScope((scope) => scope.setUser(null));
  }
};
