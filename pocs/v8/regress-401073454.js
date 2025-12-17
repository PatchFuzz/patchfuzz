(function() {
  function bar(a) {
    let x = undefined;
    try {
      x = a & 1;
    } catch (e) {}
    return 2147483647 * x + 1 << 16;
  }

  %PrepareFunctionForOptimization(bar);
  bar(-1);
  bar([]); 

  %OptimizeFunctionOnNextCall(bar);
  var obj = {};
  obj.__proto__ = null;
  print(0, bar(obj)); 
})();

(function() {
  function foo(i) {
    var a = [0.5, 1, , 3];
    return (a[i] + 1) | 0;
  }

  %PrepareFunctionForOptimization(foo);
  foo(1);
  foo(1);
  %OptimizeFunctionOnNextCall(foo);
  print(0, foo(2));
})();
