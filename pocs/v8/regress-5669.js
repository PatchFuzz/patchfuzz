function f(a, i, v) { a[i] = v; }
f("make it generic", 0, 0);

var a = new Array();
Object.defineProperty(a, "length", {value: 3, writable: false});
print(JSON.stringify(Object.getOwnPropertyDescriptor(a, "length")));
print(3, a.length);
f(a, 3, 3);
print(Object.getOwnPropertyDescriptor(a, "length").writable);
print(3, a.length);

var b = new Array();
b.length = 3;
Object.freeze(b);
print(3, b.length);
f(b, 3, 3);
print(3, b.length);
