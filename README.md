# React + Redux Movies list app

[![React Frontend](https://img.shields.io/badge/react-frontend-%23783578.svg)](http://react.io)

> ### React + Redux client app for [Movies list app API](https://github.com/AyaDesigner/movie-list-api-mu)


### [Demo](https://distracted-pare-feb384.netlify.app/)&nbsp;&nbsp;&nbsp;&nbsp;


## Getting started

This app was deployed with [Netlify](https://distracted-pare-feb384.netlify.app/)

To get the frontend running locally:

- Clone this repo https://github.com/AyaDesigner/movie-list-client-mu/
- `npm install` to install all required dependencies
- `npm start` to start the local server (this project uses `create-react-app`)

A live API server is running at https://agile-island-00923.herokuapp.com/movies
 
Alternatively, you can add `.env.local` file in the root folder of project to set environment variables (use API_URL to change webserver's URL). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to [dotenv](https://github.com/motdotla/dotenv) and [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) documentation for more details. 

### Making requests to the backend API

You can view [the API spec here](https://github.com/AyaDesigner/movie-list-api-mu) which contains all routes & responses for the server.


### Project structure

```bash
src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── InputSearch.js
│   │   ├── MovieCard.js
│   │   └── MoviesList.js
│   ├── index.css
│   ├── index.js
│   ├── redux
│   │   ├── actions
│   │   │   └── moviesActions.js
│   │   ├── reducers
│   │   │   ├── index.js
│   │   │   └── moviesReducer.js
│   │   └── store.js
```
