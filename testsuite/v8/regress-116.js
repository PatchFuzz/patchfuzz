


























var testCache = {};
var doLookup = function(id) {
  return testCache[id] = 'foo';
};

var r2 = doLookup(0);
var r1 = doLookup([0]);

assertFalse(r1 === testCache);
assertEquals('foo', r1);
assertEquals('f', r1[0]);
assertEquals('foo', r2);
assertEquals('f', r2[0]);
