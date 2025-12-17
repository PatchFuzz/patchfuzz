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
print(foo({x: 1}));
print(foo({x: 1}));
%OptimizeFunctionOnNextCall(foo);
print(foo({x: 1}));
