# Deployment

`npm run build`
`firebase deploy --only hosting`

Or set env variables as repo secrets for use by github actions.

# Registration site

Simple registration / admissions sales site for contra dance events.

Built in React.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# To do

- Email confirmation box

- Don't direclty manipulate dom!

- Give option to pay by check, and show instructions for that when clicked

- Ask for email and pronouns also for each additional person

- On checkout page ask how much each person wants to pay

- have frontend talk to cloud functions which talks to firebase(?)

- Allow paying just a deposit upfront

- Provide READMEs with instructions on what variables to set

- [next field arrow greyed out or not incorrectly on changing number of people]
