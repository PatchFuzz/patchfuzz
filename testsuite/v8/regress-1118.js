































function A() { }
%EnsureFeedbackVectorForFunction(A);
A.prototype.f = function() { }

function B() { }
%EnsureFeedbackVectorForFunction(B);

var o = new A();



function g() { try { return o.f(); } finally { }}
%EnsureFeedbackVectorForFunction(g);


function h() {
  for (var i = 0; i < 10; i++) {
    %OptimizeOsr();
    %PrepareFunctionForOptimization(h);
  }
  g();
}
%PrepareFunctionForOptimization(h);

h();
o = new B();
assertThrows("h()");
