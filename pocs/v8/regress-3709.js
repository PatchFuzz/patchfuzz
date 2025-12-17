function getobj() {
  return { bar : function() { return 0}};
}

function foo() {
  var obj = getobj();
  var length = arguments.length;
  if (length == 0) {
     obj.bar();
  } else {
     obj.bar.apply(obj, arguments);
  }
}

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
print(foo);
foo(10);
print(foo);
%ClearFunctionFeedback(foo);
