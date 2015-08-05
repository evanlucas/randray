# randray

[![Build Status](https://travis-ci.org/evanlucas/randray.svg)](https://travis-ci.org/evanlucas/randray)
[![Coverage Status](https://coveralls.io/repos/evanlucas/randray/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/randray?branch=master)

Get a random item from an array

## Install

```bash
$ npm install --save randray
```

## API

```js
var randray = require('randray')

// not an array will throw
randray(true)

// empty array will return null
randray([])
// => null

randray([1, 2, 3, 4])
// => 2
```

## Test

```bash
$ npm test
```

## Coverage

```bash
$ npm test -- --cov
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
