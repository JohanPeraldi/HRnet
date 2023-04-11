# HRnet App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Environment variables

To run this project, you will need to add the following environment variables to your .env file:

- `REACT_APP_NUM_EMPLOYEES` : number of fake employees to be generated (the .env.example file has this set to 10, so you can use that as a starting point);
- `REACT_APP_KEY_EMPLOYEES` : the key to be used to store the employees in the local storage (the .env.example file has this set to `employees`, but feel free to use any key name you see fit).
