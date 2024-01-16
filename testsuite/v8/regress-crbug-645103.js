





class Base {}
class Subclass extends Base {
  constructor() {
    %DeoptimizeNow();
    super();
  }
}
%PrepareFunctionForOptimization(Subclass);
new Subclass();
new Subclass();
%OptimizeFunctionOnNextCall(Subclass);
new Subclass();
