





class MyErrorA {}

class MyErrorB {}

class A {}

class B extends A {
  constructor() {
    try {
      super();
    } catch (e) {
      throw new MyErrorB();
    }
  }
}
%PrepareFunctionForOptimization(B);

var thrower = new Proxy(A, {
  get(target, property, receiver) {
    if (property === 'prototype') throw new MyErrorA();
  }
});

assertThrows(() => Reflect.construct(B, [], thrower), MyErrorB);
assertThrows(() => Reflect.construct(B, [], thrower), MyErrorB);
%OptimizeFunctionOnNextCall(B);
assertThrows(() => Reflect.construct(B, [], thrower), MyErrorB);
