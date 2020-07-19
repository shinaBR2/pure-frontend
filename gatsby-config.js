// Initialize dotenv
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}` // or '.env'
// });

// And then you can use the config in gatsby-config.js
// const config = require('gatsby-plugin-config').default;

const siteMetadata = {
  title: 'pure-frontend - Powerful project with just pure frontend techniques.',
  author: 'ShinaBR2',
  description: 'Powerful project with just pure frontend techniques.',
  titleTemplate: '%s · pure-frontend',
  url: 'https://github.com/shinaBR2/pure-frontend/',
  image: 'src/assets/images/share.png',
  twitterUsername: 'ShinaBR2'
};

const formatPlugins = ['gatsby-plugin-eslint'];

const PWAPlugins = [
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'pure-frontend',
      short_name: 'pure-frontend',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/assets/images/logo.png' // This path is relative to the root of the site.
    }
  },
  'gatsby-plugin-offline'
];

const SSRPlugins = ['gatsby-plugin-react-helmet'];

const imagePlugins = ['gatsby-transformer-sharp', 'gatsby-plugin-sharp'];

const stylePlugins = ['gatsby-plugin-sass'];

const multiLangPlugin = [
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      path: `${__dirname}/src/translations`,
      languages: ['vi', 'en'],
      defaultLanguage: `vi`,
      redirect: false
    }
  }
];

module.exports = {
  siteMetadata,
  plugins: [
    ...formatPlugins,
    ...PWAPlugins,
    ...SSRPlugins,
    ...imagePlugins,
    ...stylePlugins,
    ...multiLangPlugin
  ]
};
