import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
// import theme from '../theme';
import useSiteMetadata from '../helpers/hook/useSiteMetadata';

export default function Shell(props) {
  const { pathname } = useLocation();
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername
  } = useSiteMetadata();

  const { title, description, image } = props;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`
  };

  return (
    <React.Fragment>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <html lang="en" amp />
        <title itemProp="name" lang="en">
          {seo.title}
        </title>

        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}

        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}

        {seo.title && <meta property="og:site_name" content={seo.title} />}
        {seo.title && <meta name="twitter:image:alt" content={seo.title} />}

        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@400;500;600&display=swap"
          rel="preload"
          as="style"
        />
      </Helmet>
      <div>{props.children}</div>
    </React.Fragment>
  );
}

Shell.propTypes = {
  children: PropTypes.node
};
