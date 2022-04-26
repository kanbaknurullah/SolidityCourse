# type-util
[![Version][version-svg]][package-url]&nbsp;[![Build Status][travis-svg]][travis-url]</br>[![ISSUES][issues-url]][issues-url]&nbsp;[![FORKS][forks-url]][forks-url]&nbsp;[![STARS][stars-url]][stars-url]&nbsp;[![Downloads][downloads-image]][downloads-url]</br>[![License][license-image]][license-url]

[version-svg]: https://img.shields.io/npm/v/type-util.svg?style=flat-square
[package-url]: https://www.npmjs.com/package/type-util
[travis-svg]: https://img.shields.io/travis/masked-runner/type-util/master.svg?style=flat-square
[travis-url]: https://api.travis-ci.org/masked-runner/type-util.svg?branch=master
[issues-url]:https://img.shields.io/github/issues/masked-runner/type-util.svg?style=flat-square
[forks-url]:https://img.shields.io/github/forks/masked-runner/type-util.svg?style=flat-square
[stars-url]:https://img.shields.io/github/stars/masked-runner/type-util.svg?style=flat-square
[downloads-image]: https://img.shields.io/npm/dm/type-util.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=type-util
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/masked-runner/type-util/master/LICENSE
A utility package which provides the basic functions based on arrays, strings, and objetcs  


## Table of Contents
[Installation](#installation)</br>
[Usage](#usage)</br>
[Issues or Suggestions](#issues-or-suggestions)</br>
[License](#license)

## Installation

Install stable version from NPM:
```
npm install type-util --save
```

## Usage
###isEmpty(data)
returns if an array, string , or object is empty
```javascript
var util = require('type-util');
if(util.isEmpty([])) console.log('isEmpty'); else console.log('!isEmpty'); 
if(util.isEmpty('')) console.log('isEmpty'); else console.log('!isEmpty'); 
if(util.isEmpty({})) console.log('isEmpty'); else console.log('!isEmpty'); 
```
###isString(data)
returns if data is a string
```javascript
var util = require('type-util');
if(util.isString(['key1','key2'])) console.log('isString'); else console.log('!isString'); 
if(util.isString({key:'value'})) console.log('isString'); else console.log('!isString'); 
if(util.isString('here is the string')) console.log('isString'); else console.log('!isString'); 
```
###isObject(data)
returns if data is an object
```javascript
var util = require('type-util');
if(util.isObject({a:'b'})) console.log('isObject'); else console.log('!isObject'); 
if(util.isObject(['key'])) console.log('isObject'); else console.log('!isObject'); 
if(util.isObject('key')) console.log('isObject'); else console.log('!isObject'); 
```
###isArray(data)
returns if data is an array
```javascript
var util = require('type-util');
if(util.isArray([0,2,8])) console.log('isArray'); else console.log('!isArray'); 
if(util.isArray('0,2,8')) console.log('isArray'); else console.log('!isArray'); 
if(util.isArray({a:'b'})) console.log('isArray'); else console.log('!isArray'); 
```
###isFunction(data)
returns if data is a function
```javascript
var util = require('type-util');
if(util.isFunction(function(example){ /*Just an example*/  })) console.log('isFunction'); else console.log('!isFunction'); 
if(util.isFunction({})) console.log('isFunction'); else console.log('!isFunction'); 
if(util.isFunction('')) console.log('isFunction'); else console.log('!isFunction'); 
```

###lengthOf(data)
returns if length of data whether it's a string, an array, or an object
```javascript
var util = require('type-util');
console.log(util.lengthOf({a:'b',c:'d',e:{f:{g:'h'}}}));
console.log(util.lengthOf([5,6,4,8,9,77,84,90,7]));
console.log(util.lengthOf('this is a string'));
```
###find(data, key)
returns if a string, property, or key is found in data.
```javascript
var util = require('type-util');
console.log(util.find({a:'b',c:'d',e:{f:{g:'h'}}},'g'));
console.log(util.find({a:'b',c:'d',e:{f:{g:['i','j','h']}}},'h'));
```
###maxKey(data)
returns maximum element existing.
```javascript
var util = require('type-util');
console.log(util.maxKey({a:2,c:5,d:9));
```

## Issues or Suggestions
Everything is welcome, if there are any issues, or suggestions please raise them.


## License

**[MIT](./LICENSE)**

