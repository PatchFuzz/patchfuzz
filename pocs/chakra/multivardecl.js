var x = 4;

Object.defineProperty(this, "x", { writable: false });

x = 3;
print(x);
var x = 5;
print(x);
