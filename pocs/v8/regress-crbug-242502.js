function f() {
  return 23;
}

function call(o) {
  return o['']();
};
%PrepareFunctionForOptimization(call);
function test() {
  var o1 = %ToFastProperties(Object.create({foo: 1}, {'': {value: f}}));
  var o2 = %ToFastProperties(Object.create({bar: 1}, {'': {value: f}}));
  var o3 = %ToFastProperties(Object.create({baz: 1}, {'': {value: f}}));
  var o4 = %ToFastProperties(Object.create({qux: 1}, {'': {value: f}}));
  var o5 = %ToFastProperties(Object.create({loo: 1}, {'': {value: f}}));
  
  print(23, call(o1));
  print(23, call(o1));
  
  print(23, call(o2));
  print(23, call(o3));
  print(23, call(o4));
  print(23, call(o5));
  return o1;
}


test();


gc();


var oboom = test();


%OptimizeFunctionOnNextCall(call);
print(23, call(oboom));
