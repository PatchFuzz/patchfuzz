function bar(obj) {
  
  
  obj.y;
  obj.x;
  return obj.b
}

function foo(obj) {
  bar(obj);
  return obj.a;
}

var obj = { a: 10, b: 20};
%PrepareFunctionForOptimization(foo);
%EnsureFeedbackVectorForFunction(bar);
foo(obj);
%OptimizeFunctionOnNextCall(foo);
print(10, foo(obj));
