# svg-path-utils 
[![Build Status](https://travis-ci.org/krispo/svg-path-utils.svg?branch=master)](https://travis-ci.org/krispo/svg-path-utils)
[![NPM Version](http://img.shields.io/npm/v/svg-path-utils.svg?style=flat)](https://www.npmjs.org/package/svg-path-utils)

Some utilities for svg [path](https://www.w3.org/TR/SVG/paths.html) element to help operating with [path data](https://www.w3.org/TR/SVG/paths.html#PathData), 
like calculating inverse path data...

## Install 

    npm install svg-path-utils
    
## Usage

```js
var spu = require('svg-path-utils');
var utils = new spu.SVGPathUtils();
```
or in es6
```js
import {SVGPathUtils} from 'svg-path-utils';
const utils = new SVGPathUtils();
```

## Example
Reverse path calculation

| Direct Path   | Inverse Path  |
|:-------------:|:-------------:|
| <img src="http://i.imgur.com/yiqwvS7.png" width="250"> | <img src="http://i.imgur.com/V2xjCfK.png" width="250"> |
| `d="M50,300 L50,250 C50,150 75,150 100,250 C150,450 200,450 200,250 Q200,100 400,100"`  | `d="M400,100 Q200,100 200,250 C200,450 150,450 100,250 C75,150 50,150 50,250 L50,300"`|

```js
var new_d = utils.inversePath(d);
```
Check also [online demo](http://plnkr.co/edit/rIhZfI?p=preview).

## API Reference

We can generate and parse `d` string attribute (path data), calculate inverse path,..

uppercase (M) - absolute coordinates, lowercase (m) - relative coordinates

Path data commands (operators): 

* .M(x,y) - [“moveto” commands](http://www.w3.org/TR/SVG/paths.html#PathDataMovetoCommands).
* .m(x,y) 
* .L(x,y) - [“lineto” commands](http://www.w3.org/TR/SVG/paths.html#PathDataLinetoCommands).
* .l(x,y)
* .H(x) - horizontal [“lineto” commands](http://www.w3.org/TR/SVG/paths.html#PathDataLinetoCommands).
* .h(x)
* .V(y) - vertical [“lineto” commands](http://www.w3.org/TR/SVG/paths.html#PathDataLinetoCommands).
* .v(y)
* .C(x1,y1,x2,y2,x,y) - [cubic Bézier curve commands](http://www.w3.org/TR/SVG/paths.html#PathDataCubicBezierCommands).
* .c(x1,y1,x2,y2,x,y)
* .S(x2,y2,x,y) - smooth [cubic Bézier curve commands](http://www.w3.org/TR/SVG/paths.html#PathDataCubicBezierCommands).
* .s(x2,y2,x,y)
* .Q(x1,y1,x,y) - [quadratic Bézier curve commands](http://www.w3.org/TR/SVG/paths.html#PathDataQuadraticBezierCommands).
* .q(x1,y1,x,y)
* .T(x,y) - smooth [quadratic Bézier curve commands](http://www.w3.org/TR/SVG/paths.html#PathDataQuadraticBezierCommands).
* .t(x,y)
* .Z() - [“closepath” commands](http://www.w3.org/TR/SVG/paths.html#PathDataClosePathCommand).
* .z()

> Todo: add .A(...) and .a(...) - [elliptical arc curve commands](http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands).

Path data utils: 

<a name="utils_parse" href="#utils_parse">#</a> <i>utils</i>.<b>parse</b>(<i>d</i>)

Parse path data *d* into sequence of operators ['M', 'L', ...] and sequence of principal points [*(x,y)*]

<a name="utils_generate" href="#utils_generate">#</a> <i>utils</i>.<b>generate</b>({ operators: <i>[operators]</i>, points: <i>[points]</i>})

Generate *d* string from a sequence of operators ['M', 'L', ...] and sequence of principal points [*(x,y)*]

<a name="utils_inversePath" href="#utils_inversePath">#</a> <i>utils</i>.<b>inversePath</b>(<i>d</i>)

Calculate and return *d* string of inverse path

<a name="utils_join" href="#utils_join">#</a> <i>utils</i>.<b>join</b>(<i>args</i>)

Join input args into a string with space (' ') separator.

## Licence
MIT