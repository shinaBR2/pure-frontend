# Integration Google Analytics

## Requirements

- Already have a tracking ID
- Tracking ID **MUST SAVED** in `.env.production` file with `GATSBY_` prefix in key name, for example `GATSBY_GOOGLE_ANALYTICS_TRACKING_ID`.
- Understand tracking **ONLY** works on production environment. So use `gatsby build` and then `gatsby serve` to test.

## Quick Steps

- Install [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/): `npm install --save gatsby-plugin-google-analytics`
- Add new config into `gatsby-config.js` for example like below, all field references can be found [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference).

```
{
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
    head: false,
    anonymize: true,
    respectDNT: true,
    exclude: ['/preview/**', '/do-not-track/me/too/'],
    pageTransitionDelay: 0,
    defer: false,
    siteSpeedSampleRate: 10
  }
}
```

## Quick test

- Copy and paste this below code into any page

```
import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const IndexPage = () => {
  const onTestTrack = () => {
    trackCustomEvent({
      category: 'testOnly',
      action: 'Click'
    });
  };

  return (
    <div>
      <h1>Welcome to Pure Frontend Project!</h1>
      <button onClick={onTestTrack}>Click to test tracking</button>
    </div>
  );
};

export default IndexPage;

```

- Run `gatsby build` and then `gatsby serve`.
- Look into [Google Analytics dashboard](https://analytics.google.com/) to see the changes.
