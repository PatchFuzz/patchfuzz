





var global = "10.1";
function f() {}
function g(a) {
  this.d = a;
}
function h() {
  var x = new f();
  global.dummy = this;
  var y = new g(x);
};
%PrepareFunctionForOptimization(h);
h();
h();
%OptimizeFunctionOnNextCall(h);
h();
