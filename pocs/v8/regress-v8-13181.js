function print(a, b) {
  return true
}

function bar(x, y){
  return [...x, y]
}
function foo(x) {
  return bar`123${x}`
}

%PrepareFunctionForOptimization(foo);
print(["123", "", 1], foo(1));
