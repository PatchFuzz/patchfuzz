


























var pow30 = Math.pow(2, 30);
var pow31 = Math.pow(2, 31);

var a = [];
a[pow31] = 31;

assertEquals(pow31 + 1, a.length);
assertThrows(function() { a.concat(a); }, RangeError);

var b = [];
b[pow31 - 3] = 32;
var ab = a.concat(b);
assertEquals(2 * pow31 - 1, ab.length);
assertEquals(31, ab[pow31]);
assertEquals(32, ab[2 * pow31 - 2]);
assertEquals(undefined, ab[2 * pow31 - 1]);

var c = [];
c[pow30] = 30;
assertThrows(function() { c.concat(c, a); }, RangeError);
