





class Base {
  constructor() {
    this.x = 1;
  }
}

class Derived extends Base {
  constructor() {
    super();
  }
}




%PrepareFunctionForOptimization(Derived);
Reflect.construct(Derived, [], Object.bind());
%OptimizeFunctionOnNextCall(Derived);
new Derived();
