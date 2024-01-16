





var bar = 0;
function foo(outer_arg) {
  var arr = [1];
  var func = function (arg) {
      bar += arg;
      if (outer_arg) {}
  };
  try {
    arr.filter(func);
  } catch (e) {}
};

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
bar = {};
foo();
