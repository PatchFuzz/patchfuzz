function Fuu() {
  this.x = this.x.x;
};
%PrepareFunctionForOptimization(Fuu);
Fuu.prototype.x = {
  x: 1
};
new Fuu();
new Fuu();
%OptimizeFunctionOnNextCall(Fuu);
new Fuu();
