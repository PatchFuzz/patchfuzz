class A {
  constructor(arg) {
    print(123, arg);
    print(observer, new.target);
    superclass_counter++;
  }
}

class B extends A {
  constructor() {
    super(123);
    construction_counter++;
  }
}
%PrepareFunctionForOptimization(B);

var superclass_counter = 0;

var construction_counter = 0;

var observation_counter = 0;

var observer = new Proxy(A, {
  get(target, property, receiver) {
    if (property === 'prototype') {
      %DeoptimizeFunction(B);
      observation_counter++;
    }
    return Reflect.get(target, property, receiver);
  }
});

Reflect.construct(B, [], observer);
Reflect.construct(B, [], observer);
%OptimizeFunctionOnNextCall(B);
Reflect.construct(B, [], observer);
print(3, observation_counter);
print(3, construction_counter);
print(3, superclass_counter);
