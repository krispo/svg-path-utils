var test = require('tape'),
  SVGPathUtils = require('../')
  ;

test('svg-path-utils tests', function(t){
  var utils = new SVGPathUtils.SVGPathUtils();

  t.test('true', function(t){
    t.equal(true, true);
    t.end();
  });

  t.end();
});