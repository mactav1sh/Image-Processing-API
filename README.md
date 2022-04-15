# Image Processing API

Image Processing API is an API with two main functionalities, first functionality is scaling images via URL parameters. Second functionality is this API can be used as a library to serve pre-scaled images to reduce page load size

## Getting started

### Install all dependencies

```
npm install
```

### Build the server

```
npm run build
```

### Run the server

```
npm run start
```

## Testing and Formatting

### Jasmine

```
npm run test
```

### Prettier

```
npm run prettier
```

### ESLint

```
npm run lint
```

## Usage

This server will be listening on `port:3000`

### Instructions Endpoint.

`http://localhost:3000/api/images`

### Scaling Endpoint.

`http://localhost:3000/api/images?filename=YOUR_FILE_NAME&height=HEIGHT_VALUE&width=WIDTH_VALUE`

| Parameter  | Type     | Description                                |
| ---------- | -------- | ------------------------------------------ |
| `filename` | `string` | image name without extension ex: car       |
| `width`    | `number` | Image width and must be a positive number  |
| `height`   | `number` | Image height and must be a positive number |

### List of images available for usage.

- sky
- car
- sea
- tree
- sunny
- space

#### To add more images, add the the additional images to the `examples/full` folder.

#### All scaled images are available in the `examples/thumbnails` folder

### Instructions

In the instructions Endpoint `http://localhost:3000/api/images?filename=YOUR_FILE_NAME&height=HEIGHT_VALUE&width=WIDTH_VALUE`

1. Replace `YOUR_FILE_NAME` with the `filename` of the image from the List of Images available
2. Replace `WIDTH_VALUE` with the `width` desired
3. Replace `HEIGHT_VALUE` with the `height` desired
