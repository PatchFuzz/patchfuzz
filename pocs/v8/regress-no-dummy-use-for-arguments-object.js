function g() {
  arguments.length;
}

var global = "";

function f() {
  global.dummy = this;
  g({});
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
