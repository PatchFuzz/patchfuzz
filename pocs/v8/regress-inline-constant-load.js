var o1 = {};
var o2 = {};

function foo(x) {
  return x.bar;
}

Object.defineProperty(o1, 'bar', {value: 200});
foo(o1);
foo(o1);

function f(b) {
  var o = o2;
  if (b) {
    return foo(o);
  }
};
%PrepareFunctionForOptimization(f);
f(false);
%OptimizeFunctionOnNextCall(f);
print(undefined, f(false));
Object.defineProperty(o2, 'bar', {value: 100});
print(100, f(true));
