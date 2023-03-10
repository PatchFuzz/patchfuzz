





function C1() { }
C1.prototype.f = function () { return 1; }

function C2() { }
C2.prototype.f = function () { throw 2; }

var o1 = new C1();
var o2 = new C2();

function foo(o) {
  return o.f();
}

%PrepareFunctionForOptimization(foo);
foo(o1);
try { foo(o2); } catch(e) {}
foo(o1);
try { foo(o2); } catch(e) {}
%OptimizeFunctionOnNextCall(foo);
print(1, foo(o1));
print(() => foo(o2));
