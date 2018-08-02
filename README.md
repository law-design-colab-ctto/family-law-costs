# family-law-costs

website to help educate people about the financial and emotional impact of a family law dispute in Canada

## Local Development

#### Dependencies

- Node.JS 8.x

#### Setting up and running the app

1. Fork this repo (law-design-colab-ctto/family-law-costs)
2. Clone your forked repo
3. `cd` into the newly cloned `family-law-costs` project directory on your local machine
4. Run `yarn` to install
5. Run `yarn start` to get the app started locally

That's it! Your local development site is now available at:
[http://localhost:3000/](http://localhost:3000/)

## Deployment

[**Heroku**][heroku] is being used during development. The master branch of `law-design-colab-ctto/family-law-costs` will be auto-deployed to [http://family-law-costs.herokuapp.com/](family-law-costs.herokuapp.com)/

## Code

### Technology Used

- React + Redux
- Heroku

### ESLint

- If your code editor has an ESLint extension, install and use it
- The `.eslintrc.js` file contains the ESLint config
- You can also run `yarn lint` to run ESLint manually
- There is a pre-commit hook that will run `eslint --fix`

### Styles

- This code base uses `styled-components`
- Reusable generic components should be put in `src/components`

### Folder structure

- `src/components` contains components that can be reused and shared between scenes
- `src/scenes` contains scenes which can be thought of as views (ex. persona page)
- `src/styles` contains style objects so that styles can be easily standardized and adjusted (ex. import the theme red to any components that require the colour red)
