function foo(arr) {
  gc();
  eval(arr);
};
%PrepareFunctionForOptimization(foo);
try {
  foo("tag`Hello${tag}`");
} catch (e) {}

%OptimizeFunctionOnNextCall(foo);

try {
  foo("tag.prop`${tag}`");
} catch (e) {}
