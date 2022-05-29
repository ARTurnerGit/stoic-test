## Explanatory info

Assumptions:

- good data of the expected shape (as shown in mockQuestions.json)
- no more than 4 choices available per question

Limitations:

- currently only limited to three colours of background indicating %age correct, could be expanded to more (and transitions between them smoothed out too)
- approach to the responsive design may not be as desired, my current job doesn't feature anything in the way of responsive/mobile work so I'd say this is the rustiest area

Other:

- input can be amended by amending mockQuestions.js, then changing the index to read from in index.js
- intended to add tests using RTL and Jest, however the responsiveness part of the work took me a long time due to lack of practice - this would be next on the list
- tasks completed include the base tasks and the extension tasks

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
