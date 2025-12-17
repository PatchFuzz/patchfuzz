var a = 0;

function observe(x, y) {
  return x;
}

function side_effect(x) {
  a = x;
}

function test() {
  
  
  
  return observe(a, arguments[(side_effect(a), a + 0)]);
}


;
%PrepareFunctionForOptimization(test);
for (var i = 0; i < 10; ++i) test(0);
%OptimizeFunctionOnNextCall(test);
test(0);

a = "hello";
test(0);
