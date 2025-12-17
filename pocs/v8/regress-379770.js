function foo(obj) {
  var counter = 1;
  for (var i = 0; i < obj.length; i++) {
    %OptimizeOsr();
    %PrepareFunctionForOptimization(foo);
  }
  counter += obj;
  return counter;
}
%PrepareFunctionForOptimization(foo);

function bar() {
  var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (var i = 0; i < 100; i++ ) {
    foo(a);
  }
}

try {
  bar();
} catch (e) {
}
