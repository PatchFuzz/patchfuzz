function eq(a, b) {
  if (typeof b === "object") {
    return b.equals(a);  
  }
  return a === b;
}

Object.prototype.equals = function (other) {
  return (this === other);
};

function test() {
  for (var i = 0; !eq(i, 10); i++)
    ;
}

%PrepareFunctionForOptimization(test);
eq({}, {});
eq({}, {});
eq(1, 1);
eq(1, 1);
test();
%OptimizeFunctionOnNextCall(test);
test();
%PrepareFunctionForOptimization(test);
%OptimizeFunctionOnNextCall(test);


test();
print(test);
