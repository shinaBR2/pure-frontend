import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

class SimplyfiedLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <div role="main">{children}</div>
        <Footer />
      </div>
    );
  }
}

SimplyfiedLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default SimplyfiedLayout;
