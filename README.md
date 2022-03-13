# Image processing API

### RESTful API for resizing, rendering, and saving images to local machine. Image processing is built on top of Sharp npm package.

<hr>

### Jasmine and SuperTest are used for testing

<hr>

### Usage
- After downloading prject, run `npm i` to install all dependencies.
- run `npm build` to build project es code.
- run `npm start` to start up the server

<hr>

### Routes
`localhost:3000/images/:image`
#### this command renders your image

`localhost:3000/images/:image?width=0&height=0`
#### this command processes your image and save it to local machine
