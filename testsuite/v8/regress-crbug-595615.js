





"use strict";

function f(o) {
  return o.x();
};
%PrepareFunctionForOptimization(f);
try {
  f({x: 1});
} catch (e) {
}
try {
  f({x: 1});
} catch (e) {
}
%OptimizeFunctionOnNextCall(f);
try {
  f({x: 1});
} catch (e) {
}
