





"use strict"

function f(c) {
  if (c) { throw new Error(); }
  throw new Error();
};

function Error()  {
  return arguments.length;
}

%PrepareFunctionForOptimization(f);
print(function() { f(true); });
print(function() { f(false); });
%OptimizeFunctionOnNextCall(f);
print(function() { f(true); });
