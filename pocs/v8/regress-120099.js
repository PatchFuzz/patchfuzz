'use strict';

var a = Object.create(Object.prototype);
var b = Object.create(Object.prototype);
print(a === b);

Object.defineProperty(a, 'x', { value: 1 });
print(a.x === 1);
print(b.x === undefined);

b.x = 2;
print(a.x === 1);
print(b.x === 2);
