(function() {
function foo() {
  var a = foo.bind(this);
  %DeoptimizeNow();
  if (!a) return a;
  return 0;
};
%PrepareFunctionForOptimization(foo);
print(0, foo());
print(0, foo());
%OptimizeFunctionOnNextCall(foo);
print(0, foo());
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
print(0, foo());
print(0, foo());
%OptimizeFunctionOnNextCall(foo);
print(0, foo());
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

print(0, foo());
print(0, foo());
%OptimizeFunctionOnNextCall(foo);
print(0, foo());
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

print(0, foo());
print(0, foo());
%OptimizeFunctionOnNextCall(foo);
print(0, foo());
})();
