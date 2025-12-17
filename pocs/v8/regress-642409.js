class SuperClass {
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.doSomething();
  }
  doSomething() {
  }
}

%PrepareFunctionForOptimization(SubClass);
new SubClass();
new SubClass();
%OptimizeFunctionOnNextCall(SubClass);
new SubClass();
