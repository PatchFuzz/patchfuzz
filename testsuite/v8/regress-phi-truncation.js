




























function test(fun, expectation) {
  %PrepareFunctionForOptimization(fun);
  assertEquals(1, fun(1));
  %OptimizeFunctionOnNextCall(fun);
  assertEquals(expectation, fun(0));
}

test(function(x) {
  var a = x ? true : false;
  return a | 0;
}, 0);

test(function(x) {
  var a = x ? true : true;
  return a | 0;
}, 1);

test(function(x) {
  var a = x ? true : "0";
  return a | 0;
}, 0);

test(function(x) {
  var a = x ? true : "1";
  return a | 0;
}, 1);

test(function(x) {
  var a = x ? true : "-1";
  return a | 0;
}, -1);

test(function(x) {
  var a = x ? true : "-0";
  return a | 0;
}, 0);

test(function(x) {
  var a = x ? true : "0x1234";
  return a | 0;
}, 0x1234);

test(function(x) {
  var a = x ? true : { valueOf: function() { return 2; } };
  return a | 0;
}, 2);

test(function(x) {
  var a = x ? true : undefined;
  return a | 0;
}, 0);

test(function(x) {
  var a = x ? true : null;
  return a | 0;
}, 0);

test(function(x) {
  var a = x ? true : "";
  return a | 0;
}, 0);
