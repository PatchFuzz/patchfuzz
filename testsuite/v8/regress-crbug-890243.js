






function bar(x) {
  return x + x;
}
bar(0.1);





function baz(y) {
  return {y};
}
baz(null);
baz(0);



function foo(o) {
  return !baz(bar(o.x)).y;
};
%PrepareFunctionForOptimization(foo);
assertFalse(foo({x: 1}));
assertFalse(foo({x: 1}));
%OptimizeFunctionOnNextCall(foo);
assertFalse(foo({x: 1}));
