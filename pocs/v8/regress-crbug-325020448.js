var p1 = {}
var p2 = {}
function foo() {}
var o1 = new foo();


o1.con = 1;
o1.__proto__ = p1;
o1.__proto__ = p2;





function t1(o) {
  var a = o.con;
  o.__proto__ = p1;
  o.con = 2;
  o.__proto__ = p2;
  return a + o.con;
}
function t2() {
  var o = new foo();
  o.con = 1;
  return t1(o);
}
%PrepareFunctionForOptimization(t1);
print(t2() == 3);
%OptimizeFunctionOnNextCall(t1);
print(t2() == 3);
