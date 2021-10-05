# Teen Workout
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This is a Progressive Web Application that enables users to store their own profile of health and shape of the body to helps them to keep in the shape of improving the muscles.
You also want to see the server project in this case. [Teen Workout Server repo](https://github.com/muhamadzolfaghari/teen-workout-server)

To see the demo you can use a demo version of that developed on Vercel and available for the visit. [Teen Workout Demo](https://teen-workout.vercel.app/).

## How to implement
To developing and running in locally, you should use to create a file to determine the environment vars that running the app depends on those.
This file must be named under `.env` or `.env.development` or so on.
The values for running the app may be like the following.


REACT_APP_API_BASE_URL=http://127.0.0.1:8000

REACT_APP_CLIENT_ID={GOOGLE_OAUTH2_CLIENT_ID}

REACT_APP_REDIRECT_URI=http://localhost:3000

To implementing the oauth2 you have to have a oauth2 client id and to get a one you can visit to [OAUTH2](https://developers.google.com/identity/protocols/oauth2)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
