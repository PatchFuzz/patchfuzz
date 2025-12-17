var a = 1;
a.__proto__.f = 1;
a.__proto__.f = function() {
  return 1;
};


function B() {}
B.prototype = {
  f: function() {
    return 2;
  }
};
var b = new B();
function C() {}
C.prototype = {
  g: 'foo',
  f: function() {
    return 3;
  }
};
var c = new C();

function crash(obj) {
  return obj.f();
};
%PrepareFunctionForOptimization(crash);
for (var i = 0; i < 2; i++) {
  crash(a);
  crash(b);
  crash(c);
}
%OptimizeFunctionOnNextCall(crash);
print(1, crash(a));
