# Chuckify
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

## Live demo
View a live demo: https://vu-chuckify.web.app

## Quickstart
```
git clone git@github.com:vonubisch/chuckify.git
cd chuckify
yarn install
yarn start
```

## Notes
### User interface
- For the quote I would prefer a horizontal carousel displaying it with 1 full item and 2 half items on the side, it's possible but due to limitations of API not optimal
- The UI favors the consumption of a/one quote
- Reading quotes in a (large) list form is unconventional
- There is always a clear path to the next quote
- The UI will try to always display a quote without the least amount of actions
- On small screens the categories will be reduced to one row that is scrollable horizontally

### Bidirectionality
- You can switch LTR/RTL mode in the top navigation
- The quote, that is always in a LTR language, is always displayed as LTR regardless of setting the bidirectionality
- The rest of the interface is ready for further internationalization and translation

### Architecture
- Bootstrapped with Create React App, more functionality like SSR would probably be overkill
- Router, every webapp needs a router, so I've added the most simple one
- As this is a simple app, most shared state is achieved with the Context API. For larger apps I would prefer Redux.
- While keeping the amount of third-party packages to a minimum I've added an effect for the main purpose of the app, displaying a quote

## Credits
- React - https://reactjs.org
- React Router DOM - https://reactrouter.com/web/guides/quick-start
- TailwindCSS - https://tailwindcss.com/docs
- Axios - https://axios-http.com 
- Material Icons - https://material-ui.com/components/icons/ 
- Typewriter - https://www.npmjs.com/package/typewriter-effect
- ESLint - https://eslint.org
- Firebase Hosting https://console.firebase.google.com
- Github - https://github.com
- Cypress - https://www.cypress.io

## Research
### New technologies researched
- TailwindCSS graphical framework
- Cypress testing framework
- LTR / RTL interface design
### Useful online resources used
- https://material.io/design/usability/bidirectionality.html
- https://opensource.com/life/16/3/twisted-road-right-left-language-support