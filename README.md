# Chuckify

## Live demo
View a live demo: https://vu-chuckify.web.app

## Quickstart
```
git clone git@github.com:vonubisch/chuckify.git
cd chuckify
yarn install
yarn test
yarn build
yarn start
```

## Notes

### Researched
- TailwindCSS
- LTR / RTL interface design

### User interface
- For the quote I would prefer a horizontal carousel displaying it with 1 full item and 2 half items on the side, it's possible but due to limitations of API not optimal
- The UI favors the consumption of a quote
- There is always a clear path to the next quote
- The UI will try to always display a quote with the least amount of actions
- On small screens the categories will be reduced to one horizontal row that is scrollable

### Bidirectionality
- You can switch LTR/RTL mode in the top navigation
- The quote, that is always in a LTR language, is always displayed as LTR regardless of setting the bidirectionality
- The rest of the interface is ready for further internationalization and translation

### Architecture
- State management
- Router, every webapp needs a router

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

## Research
- https://material.io/design/usability/bidirectionality.html
- https://opensource.com/life/16/3/twisted-road-right-left-language-support