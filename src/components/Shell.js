import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { StaticQuery, graphql } from 'gatsby';
import MainLayout from './layouts/MainLayout';
import SimplyfiedLayout from './layouts/SimplyfiedLayout';

const defaultMeta = [
  { name: 'description', content: 'Some description' },
  { name: 'keywords', content: 'Some keywords' }
];

// TODO
// Change this later, get from gatsby-config.js instead
const siteMetadata = {
  title: 'bookandsoul - book is soul and vice versa',
  author: 'bookandsoul',
  description: 'Book and Soul description here'
};

const Shell = ({ children, location }) => {
  const { pathname } = location;
  const meta = [...defaultMeta];
  const htmlClassName = 'bns__wrapper';
  let content;

  if (pathname === '/') {
    content = <MainLayout>{children}</MainLayout>;
  } else {
    content = <SimplyfiedLayout>{children}</SimplyfiedLayout>;
  }

  return (
    <div>
      <Helmet title={siteMetadata.title} meta={meta}>
        <html className={htmlClassName} lang="en" />
      </Helmet>
      {content}
    </div>
  );
};

Shell.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
};

export default Shell;
