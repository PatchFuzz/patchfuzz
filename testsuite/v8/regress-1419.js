





























function foo() {
}

var f1 = function (x) {}.bind(foo);
var f2 = function () {};

assertEquals(1, f1.length);


f2.bind(foo);

assertEquals(1, f1.length);

var desc = Object.getOwnPropertyDescriptor(f1, 'length');
assertEquals(false, desc.writable);
assertEquals(false, desc.enumerable);
assertEquals(true, desc.configurable);

Object.defineProperty(f1, 'length', {
  value: 'abc',
  writable: true
});
assertEquals('abc', f1.length);
f1.length = 42;
assertEquals(42, f1.length);
