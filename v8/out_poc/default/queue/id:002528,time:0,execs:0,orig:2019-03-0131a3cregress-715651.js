





function f() {
  this.x = 1;
}

var a = [];


for (let i = 0; i < 100; i++) {
  new f();
}

function h() {
  
  var o = new f();
  o.y = 1.5;
  return o;
}

function g(o) {
  
  
  o.u = 1.1;
  o.v = 1.2;
  o.z = 1.3;
  
  return o.y;
}

%PrepareFunctionForOptimization(g);
g(h());
g(h());
%OptimizeFunctionOnNextCall(g);
print(1.5, g(h()));
