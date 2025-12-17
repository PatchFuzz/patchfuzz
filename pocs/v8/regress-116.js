var testCache = {};
var doLookup = function(id) {
  return testCache[id] = 'foo';
};

var r2 = doLookup(0);
var r1 = doLookup([0]);

print(r1 === testCache);
print('foo', r1);
print('f', r1[0]);
print('foo', r2);
print('f', r2[0]);
