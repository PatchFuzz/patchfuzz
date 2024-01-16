





function baz(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i], b[i]) return false;
  }
}
function bar(expected, found) {
  if (!baz(found, expected)) {
  }
};
bar([{}, 6, NaN], [1.8, , NaN]);
function foo() {
  var a = [1, 2, 3, 4];
  bar(a.length, a.length);
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
