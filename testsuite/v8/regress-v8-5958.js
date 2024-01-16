





class A {}
class B {}

A.__proto__ = new Proxy(A.__proto__, {
  get: function (target, property, receiver) {
    if (property === Symbol.hasInstance) throw new B;
  }
});

assertThrows(() => (new A) instanceof A, B);
