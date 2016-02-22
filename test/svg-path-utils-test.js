var test = require('tape'),
  SVGPathUtils = require('../')
  ;

test('svg-path-utils tests', function(t){
  var utils = new SVGPathUtils.SVGPathUtils();

  t.test('.M ', function(t){
    t.equal(utils.M(10,20), 'M10,20');
    t.end();
  });
  t.test('.m ', function(t){
    t.equal(utils.m(10,20), 'm10,20');
    t.end();
  });

  t.test('.parse ', function(t){
    var d = 'M10,200 C10,0 400,400 400,200 L20,30';
    var _ = utils.parse(d);
    t.deepEqual(_.operators, ['M', 'C', 'L']);
    t.deepEqual(_.points, [{x: 10, y:200}, {x: 10, y: 0}, {x: 400, y:400}, {x: 400, y: 200}, {x: 20, y:30}]);
    t.end();
  });

  t.test('.generate ', function(t){
    var _ = {
      operators: ['M', 'C', 'L'],
      points: [{x: 10, y:200}, {x: 10, y: 0}, {x: 400, y:400}, {x: 400, y: 200}, {x: 20, y:30}]
    }
    var d = utils.generate(_);
    t.equal(d, 'M10,200 C10,0 400,400 400,200 L20,30');
    t.end();
  });

  t.test('.inversePath ', function(t){
    var d = 'M10,200 C10,0 400,400 400,200 L20,30';
    var inverse_d = utils.inversePath(d);
    t.equal(inverse_d, 'M20,30 L400,200 C400,400 10,0 10,200');
    t.end();
  });

  t.end();
});