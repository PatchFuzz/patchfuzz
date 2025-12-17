var thrower = {
  [Symbol.toPrimitive]: function() {
    FAIL;
  }
};

function testTrace(func) {
  try {
    func(thrower);
    print();
  } catch (e) {
    print(e.stack.indexOf("fromCharCode") >= 0);
  }
}

testTrace(String.fromCharCode);

function foo(x) {
  return String.fromCharCode(x);
};
%PrepareFunctionForOptimization(foo);
foo(1);
foo(2);
testTrace(foo);
%OptimizeFunctionOnNextCall(foo);
testTrace(foo);
