





function testMax1(b) {
  const max = Math.max(-1, b ? -0 : 1);
  return Object.is(max, -0);
}
%PrepareFunctionForOptimization(testMax1);
print(testMax1(true));
print(testMax1(true));
%OptimizeFunctionOnNextCall(testMax1);
print(testMax1(true));

function testMax2(b) {
  const max = Math.max(b ? -0 : 1, -1);
  return Object.is(max, -0);
}
%PrepareFunctionForOptimization(testMax2);
print(testMax2(true));
print(testMax2(true));
%OptimizeFunctionOnNextCall(testMax2);
print(testMax2(true));

function testMin1(b) {
  const min = Math.min(1, b ? -0 : -1);
  return Object.is(min, -0);
}
%PrepareFunctionForOptimization(testMin1);
print(testMin1(true));
print(testMin1(true));
%OptimizeFunctionOnNextCall(testMin1);
print(testMin1(true));

function testMin2(b) {
  const min = Math.min(b ? -0 : -1, 1);
  return Object.is(min, -0);
}
%PrepareFunctionForOptimization(testMin2);
print(testMin2(true));
print(testMin2(true));
%OptimizeFunctionOnNextCall(testMin2);
print(testMin2(true));
