
# Pure Frontend Project

This is a small project to demonstrate how to build a powerful but totally on frontend side with almost basic features.
The most painful combination is Gatsby + Firebase + Apollo Client.

## Related Technologies

- [React](https://reactjs.org/).
- [Firebase Auth](https://firebase.google.com/docs/auth) for a comprehensive user management solution.
- [Gatsby](gatsbyjs.org/) static site generator.
- [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL API calls.

## Paintful problem solved

- Use Firebase with Gastby. Forget everything about SSR Gatsby build issue.
- Use Apollo Client with Gatsby and Firebase, which support **update Firebase user token whenever it changes**.

## View demo

- [Deploy to Heroku](link).
- [Deploy to Netlify](link).

## Structure Explaination

```
.
+-- README.md
+-- gatsby-browser.js
+-- gatsby-config.js
+-- gatsby-ssr.js
+-- package.json
+-- src
|     +-- assets
|     |     +-- css
|     |     +-- fonts
|     |     +-- images
|     +-- components
|     +-- containers
|     +-- data
|     +-- helpers
|     +-- pages
|     +-- queries
|     +-- translations
|     +-- apollo.js
|     +-- firebase.js
|     +-- root.js
```

There are some important files are:
+ `src/root.js`: this is where we should start from, wrap all React inside a Provider via React Context with included Firebase and Apollo Client. `wrapRootElement` of Gatsby would be defined here, too.
+ `src/firebase.js`: this is the firebase magic, resolve all SSR issue with Firebase in Gatsby.
+ `src/apollo.js`: this is Apollo `client` we need for `Apollo Provider`, resolve Firebase user token issue here.

Other structured folder:
- `src/helpers`: where all app logic comes from.
- `src/page`: Gatsby's default page folder for all static pages.
- `src/translations`: contains all JSON files for multiple language site.
- `src/queries`: all GraphQL queries are defined here.
- `src/data`: contains all dummy data for client side when the backend has not ready yet.
- `src/containers`: all containers in React, stateful.
- `src/components`: all **STATELESS** React components.

## Feedback
Please feel free to have any feedback. I am always keep moving forward to improve this project.
