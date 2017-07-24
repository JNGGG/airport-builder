# Openscope Airport Builder

This provides a way for users to create airport files to be used with the [Openscope](https://github.com/openscope/openscope) project.

## Quick start

- clone the repo
- `npm install` or `yarn` 
- `npm run build`
- `npm run start` and in another terminal `gulp watch`

## Notes 

- This project uses React, Redux, tcomb and tcomb-form.  
- This follows a container -> components structure for connected components, meaning:
    1) container components are at the top of thier respective component trees
    1) they are the only ones with direct access to the Redux store
    1) they are responsible only for mapping state and dispatch to props and passing them to child components

If you have any questions, feel free to join us on [Slack](http://slack.openscope.co) and ping Nate Geslin directly.
