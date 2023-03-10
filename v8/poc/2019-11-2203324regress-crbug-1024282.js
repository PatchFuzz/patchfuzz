





print = function print(code) {};
%PrepareFunctionForOptimization(print);

function foo(val) {
  var arr = [];
  function bar() {
    function m1() {}
    %PrepareFunctionForOptimization(m1);
    print(m1);
    0 in arr;
  }
  %PrepareFunctionForOptimization(bar);
  bar();  
  gc();
  bar(true);
}

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
