# Items & Comments

Items & Comments is a client side app powered by Empeek. The app allows user to add items and comment them, storing data in browser's
Local Storage.
Technologies used: Loacal Storage API, React, ReactDOM, React Router, Redux, Redux Thunk, React Redux and Lodash with QS as helpers.

## Architecture

<<<<<<< HEAD
App component is wrapped by Router which routes are described as plain routes. Redux store holds the App's state. Data
fetching is provided with the help of router & Browser History: there's historyCallback that gathers with the help of
helpers/routes/index.js prepareData function all routes prepareDate functions and calls them in order to get data when
URL is changed.
There're two High Order Components: Items Container and Comments Container. The state's structure looks like:
=======
App component is wrapped by Router which routes are described as plain routes. Instead of React components' lifecycle methods React Router & Browser History are used to fetch data when SPA is loaded or user changes routes (see App.js & helpers/routes/index.js). 
Redux store holds the App's state. There're two High Order Components: Items Container and Comments Container. The state's structure looks like:
```javascript
>>>>>>> 701f2b49b5e6a69972439922d4ffd5802342c83d
{
    items: [
        {
            id: itemId,
            name: itemName,
            comments: commentsAmount
        }
    ],
    activeItem: {
        id,
        name,
        comments: [
            'comment text'
        ]
    }
}
```

Data structure is held in browser's Local Storage and looks like array of object oriented documents:
```javascript
[
    {
        id,
        name,
        comments
    }
]
```
Interaction with Local Storate API is provided by Redux Thunk middleware.

## Development Environment

There's only Development Environment available up to now. It is configured using Webpack, Babel and React Hot Loader.
Webpack Dev Server is used as development server. There're Redux Dev Tools added to control app's state in development
(is in invisible mode by default, use Ctrl+H to open Dev Tools monitor). ESLint is used as a linter.

## Running

Pull master branch and run npm install to install all dependencies.
To launch the app run npm start and go to http://localhost:3000/.
