function Foo() {
  u = 0;
}

var x = new Foo();
print(Object.getPrototypeOf(x) === Foo.prototype, true);
print(Object.getPrototypeOf(x) === Object.prototype, false);
