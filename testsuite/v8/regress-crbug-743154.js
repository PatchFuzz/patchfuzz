





Object.prototype[1] = 1.5;

var v = { length: 12, [1073741824]: 0 };

assertEquals(['1073741824', 'length'], Object.keys(v));
assertEquals(undefined, v[0]);
assertEquals(1.5, v[1]);
assertEquals(0, v[1073741824]);


Array.prototype.sort.call(v);

assertEquals(['0', '1073741824', 'length'], Object.keys(v));
assertTrue(v.hasOwnProperty(0));
assertEquals(1.5, v[0]);
assertFalse(v.hasOwnProperty(1));
assertEquals(1.5, v[1]);
assertEquals(0, v[1073741824]);
