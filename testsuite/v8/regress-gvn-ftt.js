





function A(id) {
  this.id = id;
}

var a1 = new A(1);
var a2 = new A(2);


var g;
function f(o, value) {
  g = o.o;
  o.o = value;
  return o.o;
}

var obj = {o: a1};

%PrepareFunctionForOptimization(f);
f(obj, a1);
f(obj, a1);
%OptimizeFunctionOnNextCall(f);
assertEquals(a2.id, f(obj, a2).id);
