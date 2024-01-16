





function foo() {
  var a = [''];
  print(a[0]);
  return a;
}

function bar(a) {
  a[0] = 'bazinga!';
};
%PrepareFunctionForOptimization(bar);
for (var i = 0; i < 5; i++) bar([]);

%OptimizeFunctionOnNextCall(bar);
bar(foo());
assertEquals([''], foo());
