# svg-path-utils

Some svg utilities for `path` element like to calculate inverse path, or the first/second derivative at a point on a path, ...

## Install 

    npm install svg-utils
    
## Usage

```js
var SVGUtils = require('svg-utils');
```
or in es6
```js
import * as SVGUtils from 'svg-utils';
```

## API Reference

We can generate and parse `d` string attribute, calculate inverse path, the first/second derivatives at a specific point on a path,..

uppercase (M) - absolute coordinates, lowercase (m) - relative coordinates

Path operators: 

* .M(x,y) - moveto
* .m(x,y) 
* .L(x,y) - lineto
* .l(x,y)
* .H(x) - horizontal lineto
* .h(x)
* .V(y) - vertical lineto
* .v(y)
* .C(x1,y1,x2,y2,x,y) - cubic bezier curveto
* .c(x1,y1,x2,y2,x,y)
* .S(x2,y2,x,y) - smooth cubic bezier curveto
* .s(x2,y2,x,y)
* .Q(x1,y1,x,y) - quadratic bezier curveto
* .q(x1,y1,x,y)
* .T(x,y) - smooth quadratic bezier
* .t(x,y)
* .Z() - close path
* .z()

> Todo: add .A(...) and .a(...) - elliptical arc.

Path utils: 

* .parse(*d*) - parse *d* string into sequence of operators ['M', 'L', ...] and sequence of principal points [*(x,y)*]
* .generate({ operators: [*(operators)*], points: [*(points)*]}) - generate *d* string from a sequence of operators ['M', 'L', ...] and sequence of principal points [*(x,y)*]
* .inversePath(*d*) - calculate and return *d* string of inverse path
...

## Licence
MIT