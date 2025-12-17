var f = function() {};



var a = { foo: 'bar' };
f.prototype = a;
print(f.prototype, a);
print(f.prototype.foo, 'bar');
print(new f().foo, 'bar');
print(Object.getPrototypeOf(new f()), a);
print(Object.getOwnPropertyDescriptor(f, 'prototype').value, a);
print(Object.getOwnPropertyDescriptor(f, 'prototype').writable);




var b = { foo: 'baz' };
Object.defineProperty(f, 'prototype', { value: b, writable: true });
print(f.prototype, b);
print(f.prototype.foo, 'baz');
print(new f().foo, 'baz');
print(Object.getPrototypeOf(new f()), b);
print(Object.getOwnPropertyDescriptor(f, 'prototype').value, b);
print(Object.getOwnPropertyDescriptor(f, 'prototype').writable);



var c = { foo: 'other' };
f.prototype = c;
print(f.prototype, c);
print(f.prototype.foo, 'other');
print(new f().foo, 'other');
print(Object.getPrototypeOf(new f()), c);
print(Object.getOwnPropertyDescriptor(f, 'prototype').value, c);
print(Object.getOwnPropertyDescriptor(f, 'prototype').writable);



var d = { foo: 'final' };
Object.defineProperty(f, 'prototype', { value: d, writable: false });
print(f.prototype, d);
print(f.prototype.foo, 'final');
print(new f().foo, 'final');
print(Object.getPrototypeOf(new f()), d);
print(Object.getOwnPropertyDescriptor(f, 'prototype').value, d);
print(Object.getOwnPropertyDescriptor(f, 'prototype').writable);


print("'use strict'; f.prototype = {}");
print("Object.defineProperty(f, 'prototype', { value: {} })");




Object.defineProperty(f, 'name', { value: {} });
Object.defineProperty(f, 'length', { value: {} });
