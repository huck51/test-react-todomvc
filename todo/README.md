# TodoMVC (REACT)

> This app was built using React, Create React App, and ESLint. You may view their documentation using the links provided below.

[React](https://reactjs.org/)
[Create React App](https://github.com/facebook/create-react-app)
[ESLint](https://eslint.org/)

## Resources


- [Genius Plaza](https://www.geniusplaza.com/en/)
I used the Genius Plaza website to get my color scheme, tab icon and some general stylistic inspiration.

## Implementation


Create React App was used in order to quickly set up a file tree and some boilerplate. Though the project was initialized with a yarn.lock file I replaced it with a package-lock.json file using npm.

The project is set up with App.js being the only container/stateful component. It's data and methods are passed down to the four other components via props.

You will notice that the state (and by extension, your to-do list) persists even when the page is closed or refreshed. This is accomplished by saving a copy of the to-do list to localStorage every time the state is updated. When the page is refreshed or closed and reopened the data from localStorage is fetched and set as state in componentDidMount.

The styling, color scheme, and tab icon were designed to mimic those used at Genius Plaza.

Thank you for taking the time to checkout my rendition of the to-do list. I look forward to hearing from you!

## Credit

Created by [Evan Allen](https://github.com/huck51)
