





function store(a) {
  a[5000000] = 1;
}

function foo() {
  var __v_8 = new Object();
  var __v_7 = new Array(4999990);
  store(__v_8);
  store(__v_7);
};
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
