function BadProto() {
  this.constant_function = function() {};
  this.one = 1;
  this.two = 2;
}
var b1 = new BadProto();
var b2 = new BadProto();

function Ctor() {}
Ctor.prototype = b1;
var a = new Ctor();

function Two(x) {
  return x.two;
};
%PrepareFunctionForOptimization(Two);
print(2, Two(a));
print(2, Two(a));
b2.constant_function = "no longer constant!";
%OptimizeFunctionOnNextCall(Two);
print(2, Two(a));
