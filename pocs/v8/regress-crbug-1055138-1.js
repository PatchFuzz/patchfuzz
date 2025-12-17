Object.prototype[1] = 153;
Object.freeze(Object.prototype);

(function TestSloppyStoreToReadOnlyProperty() {
  function foo() {
    let ar = [];
    for (let i = 0; i < 3; i++) {
      ar[i] = 42;

      if (i == 1) {
        
        
        print(1, ar.length);
      } else {
        print(i + 1, ar.length);
      }
    }
    return ar;
  }

  print([42,153,42], foo());
  print([42,153,42], foo());
  print([42,153,42], foo());
  %PrepareFunctionForOptimization(foo);
  print([42,153,42], foo());
  %OptimizeFunctionOnNextCall(foo);
  print([42,153,42], foo());
})();

(function StrictStoreToReadOnlyProperty() {
  function foo() {
    "use strict";
    let ar = [];
    let threw_exception = false;
    for (let i = 0; i < 3; i++) {
      try {
        ar[i] = 42;
      } catch(e) {
        
        
        print(i == 1);
        print(1, ar.length);
        print(e, TypeError);
        threw_exception = true;
      }
    }
    print(threw_exception);
    return ar;
  }

  print([42,153,42], foo());
  print([42,153,42], foo());
  print([42,153,42], foo());
  %PrepareFunctionForOptimization(foo);
  print([42,153,42], foo());
  %OptimizeFunctionOnNextCall(foo);
  print([42,153,42], foo());
})();
