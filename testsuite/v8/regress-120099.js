


























'use strict';

var a = Object.create(Object.prototype);
var b = Object.create(Object.prototype);
assertFalse(a === b);

Object.defineProperty(a, 'x', { value: 1 });
assertTrue(a.x === 1);
assertTrue(b.x === undefined);

b.x = 2;
assertTrue(a.x === 1);
assertTrue(b.x === 2);
