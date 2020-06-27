import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Aside from '../Aside';
import Footer from '../Footer';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <Aside />
        <div role="main">{children}</div>
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
