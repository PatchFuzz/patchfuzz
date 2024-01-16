





function A() {
  this.x = 0;
  for (var i = 0; i < max; ) {}
}
%EnsureFeedbackVectorForFunction(A);
function foo() {
  for (var i = 0; i < 1; i = 2) %OptimizeOsr();
  return new A();
}
%PrepareFunctionForOptimization(foo);
try { foo(); } catch (e) { }
