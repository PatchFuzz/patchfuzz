




var key = -/a/g.missingProperty;

var s = new Set();
s.add(key, 17);
assertEq(s.has(key), true);
assertEq(s.has(-key), true);
assertEq(s.has(NaN), true);

s.delete(-key);
assertEq(s.has(key), false);
assertEq(s.has(-key), false);
assertEq(s.has(NaN), false);

s.add(-key, 17);
assertEq(s.has(key), true);
assertEq(s.has(-key), true);
assertEq(s.has(NaN), true);

s.delete(NaN);
assertEq(s.has(key), false);
assertEq(s.has(-key), false);
assertEq(s.has(NaN), false);

s.add(NaN, 17);
assertEq(s.has(key), true);
assertEq(s.has(-key), true);
assertEq(s.has(NaN), true);

s.delete(key);
assertEq(s.has(key), false);
assertEq(s.has(-key), false);
assertEq(s.has(NaN), false);
