function get_thrower() {
  "use strict";
  return Object.getOwnPropertyDescriptor(arguments, "callee").get;
}

var f = (function(v) {
  "use asm";
  function fun() {
    switch (v) {}
  }
  return {
    fun: fun
  };
})(get_thrower()).fun;

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
f();
