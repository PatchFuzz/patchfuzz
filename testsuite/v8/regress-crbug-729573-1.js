





(function() {
function foo() {
  var a = foo.bind(this);
  %DeoptimizeNow();
  if (!a) return a;
  return 0;
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo());
assertEquals(0, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo());
})();

(function() {
"use strict";

function foo() {
  var a = foo.bind(this);
  %DeoptimizeNow();
  if (!a) return a;
  return 0;
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo());
assertEquals(0, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo());
})();

(function() {
function foo() {
  var a = foo.bind(this);
  %DeoptimizeNow();
  if (!a) return a;
  return 0;
};
%PrepareFunctionForOptimization(foo);
foo.prototype = {
  custom: 'prototype'
};

assertEquals(0, foo());
assertEquals(0, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo());
})();

(function() {
"use strict";

function foo() {
  var a = foo.bind(this);
  %DeoptimizeNow();
  if (!a) return a;
  return 0;
};
%PrepareFunctionForOptimization(foo);
foo.prototype = {
  custom: 'prototype'
};

assertEquals(0, foo());
assertEquals(0, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo());
})();
