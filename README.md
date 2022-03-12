# Image processing API

### RESTful API for resizing, rendering, and saving images to local machine. Image processing is built on top of Sharp npm package.

<hr>

### Jasmine and SuperTest are used for testing

<hr>

### Usage

#### After cloning project, run `npm i` to install project dependencies
#### use `npm run build` to build project js code
#### use `npm run start` to start server

<hr>

### Routes

`localhost:3000/images/:image`
#### this endpoint renders your image if it exists

`localhost:3000/images/:image?width=300&height=300`

#### this endpoint processes your image then save it to local machine to `assets/thumbnail/` directory
