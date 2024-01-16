






























var f = function() {};



var a = { foo: 'bar' };
f.prototype = a;
assertSame(f.prototype, a);
assertSame(f.prototype.foo, 'bar');
assertSame(new f().foo, 'bar');
assertSame(Object.getPrototypeOf(new f()), a);
assertSame(Object.getOwnPropertyDescriptor(f, 'prototype').value, a);
assertTrue(Object.getOwnPropertyDescriptor(f, 'prototype').writable);




var b = { foo: 'baz' };
Object.defineProperty(f, 'prototype', { value: b, writable: true });
assertSame(f.prototype, b);
assertSame(f.prototype.foo, 'baz');
assertSame(new f().foo, 'baz');
assertSame(Object.getPrototypeOf(new f()), b);
assertSame(Object.getOwnPropertyDescriptor(f, 'prototype').value, b);
assertTrue(Object.getOwnPropertyDescriptor(f, 'prototype').writable);



var c = { foo: 'other' };
f.prototype = c;
assertSame(f.prototype, c);
assertSame(f.prototype.foo, 'other');
assertSame(new f().foo, 'other');
assertSame(Object.getPrototypeOf(new f()), c);
assertSame(Object.getOwnPropertyDescriptor(f, 'prototype').value, c);
assertTrue(Object.getOwnPropertyDescriptor(f, 'prototype').writable);



var d = { foo: 'final' };
Object.defineProperty(f, 'prototype', { value: d, writable: false });
assertSame(f.prototype, d);
assertSame(f.prototype.foo, 'final');
assertSame(new f().foo, 'final');
assertSame(Object.getPrototypeOf(new f()), d);
assertSame(Object.getOwnPropertyDescriptor(f, 'prototype').value, d);
assertFalse(Object.getOwnPropertyDescriptor(f, 'prototype').writable);


assertThrows("'use strict'; f.prototype = {}");
assertThrows("Object.defineProperty(f, 'prototype', { value: {} })");




Object.defineProperty(f, 'name', { value: {} });
Object.defineProperty(f, 'length', { value: {} });
assertThrows("Object.defineProperty(f, 'caller', { value: {} })");
assertThrows("Object.defineProperty(f, 'arguments', { value: {} })");
