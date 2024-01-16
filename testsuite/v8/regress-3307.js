





function p(x) {
  this.x = x;
}

function f() {
  var a = new p(1), b = new p(2);
  for (var i = 0; i < 1; i++) {
    a.x += b.x;
  }
  return a.x;
};
%PrepareFunctionForOptimization(f);
new p(0.1);  

assertEquals(3, f());
assertEquals(3, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(3, f());
