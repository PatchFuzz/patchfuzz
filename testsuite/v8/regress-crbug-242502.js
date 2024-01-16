




























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
  
  assertEquals(23, call(o1));
  assertEquals(23, call(o1));
  
  assertEquals(23, call(o2));
  assertEquals(23, call(o3));
  assertEquals(23, call(o4));
  assertEquals(23, call(o5));
  return o1;
}


test();


gc();


var oboom = test();


%OptimizeFunctionOnNextCall(call);
assertEquals(23, call(oboom));
