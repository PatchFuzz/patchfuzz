function foo() {
}

var f1 = function (x) {}.bind(foo);
var f2 = function () {};

print(1, f1.length);


f2.bind(foo);

print(1, f1.length);

var desc = Object.getOwnPropertyDescriptor(f1, 'length');
print(false, desc.writable);
print(false, desc.enumerable);
print(true, desc.configurable);

Object.defineProperty(f1, 'length', {
  value: 'abc',
  writable: true
});
print('abc', f1.length);
f1.length = 42;
print(42, f1.length);
