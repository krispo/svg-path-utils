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

  t.test('.parse ', function(t){
    var d = 'M10,200 C10,0 400,400 400,200 L20,30';
    var _ = utils.parse(d);
    t.deepEqual(_.operators, ['M', 'C', 'L']);
    t.deepEqual(_.points, [{x: 10, y:200}, {x: 10, y: 0}, {x: 400, y:400}, {x: 400, y: 200}, {x: 20, y:30}]);
    t.end();
  });

  t.end();
});