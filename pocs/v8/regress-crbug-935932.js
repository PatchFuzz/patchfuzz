function test(func, expect) {
    %PrepareFunctionForOptimization(func);
    print(func() == expect);
    %OptimizeFunctionOnNextCall(func);
    print(func() == expect);
}


var v0 = 10;
function check_v0() { return "v0" in this; }
test(check_v0, true);


v0 = 0;
test(check_v0, true);


function check_v1() { return "v1" in this; }
test(check_v1, false);
this.v1 = 3;
test(check_v1, true);
delete this.v1;
test(check_v1, false);


var v2;
function check_v2() { return "v2" in this; }
test(check_v2, true);


var v3 = {};
function check_v3() { return "v3" in this; }
test(check_v3, true);

v3 = [];
test(check_v3, true);


Object.defineProperty(this, "v4", { value: {}, configurable: false});
function check_v4() { return "v4" in this; }
test(check_v4, true);


(function() {
  function testIn(index, array) {
    return index in array;
  }
  %PrepareFunctionForOptimization(testIn);

  let a = [];
  a.__proto__ = [0,1,2];
  a[1] = 3;

  
  print(testIn(0, a));
  
  print(testIn(0, a));
  %OptimizeFunctionOnNextCall(testIn);
  
  print(testIn(0, a));

  %ClearFunctionFeedback(testIn);
  %DeoptimizeFunction(testIn);
  %PrepareFunctionForOptimization(testIn);

  
  print(testIn(0, a));
  %OptimizeFunctionOnNextCall(testIn);
  
  print(testIn(0, a));

  
  %ClearFunctionFeedback(testIn);
  %DeoptimizeFunction(testIn);
  %PrepareFunctionForOptimization(testIn);

  print(testIn(2, a));
  print(testIn(2, a));
  %OptimizeFunctionOnNextCall(testIn);
  print(testIn(2, a));

  %ClearFunctionFeedback(testIn);
  %DeoptimizeFunction(testIn);
  %PrepareFunctionForOptimization(testIn);

  print(testIn(2, a));
  %OptimizeFunctionOnNextCall(testIn);
  print(testIn(2, a));
})();
