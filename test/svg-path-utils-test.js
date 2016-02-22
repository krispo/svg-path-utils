var test = require('tape'),
  SVGPathUtils = require('../')
  ;

test('svg-path-utils tests', function(t){
  var utils = new SVGPathUtils.SVGPathUtils();

  t.test('.M ', function(t){
    t.equal(utils.M(10,20), 'M10,20 ');
    t.end();
  });
  t.test('.m ', function(t){
    t.equal(utils.m(10,20), 'm10,20 ');
    t.end();
  });

  t.end();
});