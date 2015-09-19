# create-data-uri [![Build Status](https://travis-ci.org/bendrucker/create-data-uri.svg?branch=master)](https://travis-ci.org/bendrucker/create-data-uri)

> Create a base64 data URI


## Install

```
$ npm install --save create-data-uri
```


## Usage

```js
var createDataUri = require('create-data-uri')

createDataUri('image/jpeg', 'photo')
//=> data:image/jpeg;base64,photo
```

## API

#### `createDataUri(type, data)` -> `string`

##### type

*Required*  
Type: `string`

The mime type for the data.

##### data

*Required*  
Type: `string`

Base64 encoded data.

## License

MIT © [Ben Drucker](http://bendrucker.me)
