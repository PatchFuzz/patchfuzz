class Foo extends Array {
  constructor() {
    super();
  }
};



Array.prototype[Symbol.iterator] = function () {};

%PrepareFunctionForOptimization(Foo);
new Foo();
new Foo();
%OptimizeMaglevOnNextCall(Foo);
new Foo();


Foo.__proto__ = [1];



print(()=>new Foo());
