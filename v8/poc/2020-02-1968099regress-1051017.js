






function foo1() {
  var x = -Infinity;
  var i = 0;
  for (; i < 1; i += x) {
    if (i == -Infinity) x = +Infinity;
  }
  return i;
}

%PrepareFunctionForOptimization(foo1);
print(NaN, foo1());
print(NaN, foo1());
%OptimizeFunctionOnNextCall(foo1);
print(NaN, foo1());


function foo2() {
  var i = -Infinity;
  for (; i <= 42; i += Infinity) { }
  return i;
}

%PrepareFunctionForOptimization(foo2);
print(NaN, foo2());
print(NaN, foo2());
%OptimizeFunctionOnNextCall(foo2);
print(NaN, foo2());


function foo3(b) {
  var k = 0;
  let str = b ? "42" : "0";
  for (var i = str; i < 1 && k++ < 1; i -= 0) { }
  return i;
}

%PrepareFunctionForOptimization(foo3);
print(0, foo3());
print(0, foo3());
%OptimizeFunctionOnNextCall(foo3);
print(0, foo3());
