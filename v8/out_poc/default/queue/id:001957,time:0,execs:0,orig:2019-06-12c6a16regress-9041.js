





(function() {
  class A {};

  function foo(a, fn) {
    const C = a.constructor;
    fn(a);
    return a instanceof C;
  };

  %PrepareFunctionForOptimization(foo);
  print(foo(new A(), a => {}));
  print(foo(new A(), a => {}));
  %OptimizeFunctionOnNextCall(foo);
  print(foo(new A(), a => {}));
  print(foo(new A(), a => { a.__proto__ = {}; }));
})();

(function() {
  class A {};
  A.__proto__ = {};
  A.prototype = {};

  function foo() {
    var x = Object.create(Object.create(Object.create(A.prototype)));
    return x instanceof A;
  };

  %PrepareFunctionForOptimization(foo);
  print(foo());
  print(foo());
  %OptimizeFunctionOnNextCall(foo);
  print(foo());
})();

(function() {
  class A {};
  A.prototype = {};
  A.__proto__ = {};
  var a = {__proto__: new A, gaga: 42};

  function foo() {
    A.bla;  
    a.gaga;
    return a instanceof A;
  };

  %PrepareFunctionForOptimization(foo);
  print(foo());
  print(foo());
  %OptimizeFunctionOnNextCall(foo);
  print(foo());
})();

(function() {
  class A {};
  A.prototype = {};
  A.__proto__ = {};
  const boundA = Function.prototype.bind.call(A, {});
  boundA.prototype = {};
  boundA.__proto__ = {};
  var a = {__proto__: new boundA, gaga: 42};

  function foo() {
    A.bla;  
    boundA.bla;  
    a.gaga;
    return a instanceof boundA;
  };

  %PrepareFunctionForOptimization(foo);
  print(foo());
  print(foo());
  %OptimizeFunctionOnNextCall(foo);
  print(foo());
})();
