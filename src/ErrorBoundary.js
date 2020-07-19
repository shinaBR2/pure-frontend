import React from 'react';
import { captureRenderException } from './helpers/tracking/sentryHelper';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    captureRenderException({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return <h1>Something went wrong!</h1>;
    } else {
      // when there's not an error, render children untouched
      return this.props.children;
    }
  }
}
