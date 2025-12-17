function f(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
var o3 = new f(1, 2, 3.5);
var o4 = new f(1, 2.5, 3);
var o1 = new f(1.5, 2, 3);
var o2 = new f(1.5, 2, 3);
function migrate(o) {
  return o.a;
}

migrate(o4);
migrate(o1);
migrate(o2);
function store_transition(o) {
  o.d = 1;
}



;
%PrepareFunctionForOptimization(store_transition);
store_transition(o4);
store_transition(o1);
store_transition(o2);
%OptimizeFunctionOnNextCall(store_transition);





store_transition(o3);
