# getOrElse

## Synopsis

The **getOrElse** module implements a simple function which returns the first defined argument or if all are undefined a provided default return value.

## Motivation

I started to look at famous functional js libs like: [Folktale](https://github.com/origamitower/folktale) or [RamdaFantasy](https://github.com/ramda/ramda-fantasy) which worked perfectly but was really slow for my usecase
where I'have iterated thousands of items. So I created this little module which gives me same functionality with less performance decrease.

## Installation

```bash
yarn add getorelse
# OR
npm i -S getorelse
```

## API Reference

```js
const getOrElse = require('getorelse')

// DEFAULT_VALUE can be any js object you like to return (a string, object, array, function ...)
// argument1 - argumentN can be as many arguments as you like to pass. Like plain variables or function results
getOrElse(DEFAULT_VALUE, argument1, argument2, ..., argumentN)
```

## Code Example

```js
  getOrElse(
    "defaultValue",
    returnIfEveryLower2([10, 15]),
    returnIfEveryLower2([1000, 8]),
    returnIfEveryLower2([89, 999]),
    returnIfEveryLower2([0.5, 0.7]),
    returnIfEveryLower2([0.1, 0.3])
  )
  // will return [0.5, 0.7]
```

## Tests

```bash
yarn test
# OR
npm run test
```

## Contributors

Create a issue if you like to discuss some of your ideas :)

## License

The UNLICENSE
