





function baz(f) {
  f();
}
function goo() {}
baz(goo);
baz(goo);

function bar(p) {
  if (p == 0) baz(1);
};
%PrepareFunctionForOptimization(bar);
bar(1);
bar(1);
%OptimizeFunctionOnNextCall(bar);
bar(1);
