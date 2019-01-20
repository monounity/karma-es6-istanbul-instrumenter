# karma-es6-istanbul-instrumenter

[![Npmjs version](https://img.shields.io/npm/v/karma-es6-istanbul-instrumenter.svg)](https://www.npmjs.com/package/karma-es6-istanbul-instrumenter)
[![Dependency Status](https://david-dm.org/monounity/karma-es6-istanbul-instrumenter.svg?path=packages/karma-es6-istanbul-instrumenter)](https://david-dm.org/monounity/karma-es6-istanbul-instrumenter?path=packages/karma-es6-istanbul-instrumenter)

> A karma preprocessor that uses the latest istanbul 1.x APIs to instrument native ES6 code for coverage

## About

This plugin instruments native ES6 code for coverage using the latest [istanbul 1.x APIs](https://github.com/istanbuljs), eliminating the need to transpile or bundle the code before running it in a web browser. 

Please note that this plugin only instruments (ie prepares for coverage) the code before the unit tests are executed, the actual reporting is done by [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter).

For a full, working example that runs native ES6 code and unit tests with coverage in Karma and ChromeHeadless, please see [the test folder](https://github.com/monounity/karma-es6-istanbul-instrumenter/tree/master/test).

## Installation

```
npm install --save-dev karma-es6-istanbul-instrumenter
```

## Configuration

```js
module.exports = function(config) {
    config.set({

        // ...

        preprocessors: {
            "**/!(*.spec).js": ["karma-es6-istanbul-instrumenter"]
        }

        // ...
    });
};
```

## License

MIT

© 2019 Erik Barke, Monounity
