var obj1 = {};
var obj2 = {};

function h() {}

h.prototype = obj2;

function g(v) {
  v.constructor;
}
function f() {
  g(obj1);
};
%PrepareFunctionForOptimization(f);
obj1.x = 0;
f();

obj1.__defineGetter__('x', function() {});

g(obj2);

obj2.y = 0;

%OptimizeFunctionOnNextCall(f);
f();
