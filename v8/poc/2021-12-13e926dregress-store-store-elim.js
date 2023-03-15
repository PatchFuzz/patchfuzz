







let obj = { a: 42 }

function foo() {
  
  %SimulateNewspaceFull();

  
  this.f = obj;

  this.f = {
    a: 43
  };
}

%PrepareFunctionForOptimization(foo);
var a;
a = new foo();
a = new foo();
%OptimizeFunctionOnNextCall(foo);
a = new foo();
print(43, a.f.a);
