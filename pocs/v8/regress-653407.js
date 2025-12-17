class superClass {
  constructor() {}
}

class subClass extends superClass {
  constructor() {
    super();
  }
}

function f() {
  new subClass();
};
%PrepareFunctionForOptimization(f);
f(); 
%OptimizeFunctionOnNextCall(f);
f();
