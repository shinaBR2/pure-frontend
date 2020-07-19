import { useStaticQuery, graphql } from 'gatsby';
// import facebookIcon from '../../assets/icon/facebook-light.png';
// import twitterIcon from '../../assets/icon/twitter-light.png';
// import facebookDarkIcon from '../../assets/icon/facebook-dark.png';
// import twitterDarkIcon from '../../assets/icon/twitter-dark.png';

// TODO
// Use useStaticQuery instead
// Don't know why it doesn't work
//
// Related issues:
// https://github.com/gatsbyjs/gatsby/issues/7747
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  );
  return site.siteMetadata;

  // TODO
  // Refactor ALL of below things
  /* const url = 'https://bookandsoul.com';
  const socialList = [
    {
      id: 'facebook',
      icon: facebookIcon,
      iconDark: facebookDarkIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    },
    {
      id: 'twitter',
      icon: twitterIcon,
      iconDark: twitterDarkIcon,
      href: `https://twitter.com/intent/tweet/?text=bookandsoul&url=${url}&via=booknsoul&hashtags=web,development`
    }
  ];

  return {
    defaultTitle: 'bookandsoul - book is soul and vice versa',
    titleTemplate: '%s · Book and Soul',
    author: 'bookandsoul',
    url,
    defaultDescription: 'Book and Soul description here',
    defaultImage: 'src/assets/images/share.png',
    twitterUsername: 'bookandsoul',
    socialList
  }; */
};

export default useSiteMetadata;
