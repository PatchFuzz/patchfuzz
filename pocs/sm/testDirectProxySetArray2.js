;

var a = [0, 1, 2, 3];
var p = new Proxy({}, {});
Reflect.set(p, "length", 2, a);
print("length" in p, false);
print(a.length, 2);
print(a, [0, 1]);
