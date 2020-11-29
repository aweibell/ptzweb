# PTZ Web control

This web app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Background
This project was first built quick and dirty in two hours to easily operate a PTZ camera with some defined presets. Later, some improved styling has been applied, but not much else is done yet.
If you do have a similar camera and some coding knowledge, you should be able to utilize this code quickly.

## Quick start

To use with a camera that operates the same way, you will only have to modify the content of [config.js](./config.js). List your presets, add them to your preferred groups, and it should work.

Some commands to be used in the project directory:

`npm start` to run the web server
`npm test` to run the tests (there are none yet)
`npm run build` to build the app for deployment to some hosting service


## Supported camera models

Currently the only supported model is
- Avonic CM60-IP

## Considered enhancements
- Configuration
  - Currently the ip address and presets are hardcoded, which of course does not make sense for any other locations than the developers
- Ability to control PAN, TILT and ZOOM manually
- Ability to set presets in the camera
- Support for other types of cameras

