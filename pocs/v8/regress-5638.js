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

print(() => Reflect.construct(B, [], thrower), MyErrorB);
print(() => Reflect.construct(B, [], thrower), MyErrorB);
%OptimizeFunctionOnNextCall(B);
print(() => Reflect.construct(B, [], thrower), MyErrorB);
