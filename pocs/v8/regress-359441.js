function g() {
  this.x = {};
}

function f() {
  new g();
};
%PrepareFunctionForOptimization(f);
function deopt(x) {
  %DeoptimizeFunction(f);
}

f();
f();
%OptimizeFunctionOnNextCall(f);
Object.prototype.__defineSetter__('x', deopt);
f();
