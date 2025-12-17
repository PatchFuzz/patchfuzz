function test(fun) {
  %PrepareFunctionForOptimization(fun);
  fun();
  fun();
  %DisableOptimizationFinalization();
  %OptimizeFunctionOnNextCall(fun, "concurrent");
  
  fun();
  
  %WaitForBackgroundOptimization();
  gc();
  
  print(fun);
  
  %FinalizeOptimization();
  
  print(fun);
  
  gc();
}

function f() {
  return "abcdefghijklmn" + "123456789";
}

function g() {
  return "abcdefghijklmn\u2603" + "123456789";
}

function h() {
  return "abcdefghijklmn\u2603" + "123456789\u2604";
}

test(f);
test(g);
test(h);
