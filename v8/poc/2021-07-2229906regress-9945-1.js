






function foo(x) { bar(x) }
function bar(x) { x.p }

%PrepareFunctionForOptimization(foo);
%PrepareFunctionForOptimization(bar);


var dummy = [];
dummy.p = 0;
dummy.q = 0;

var a = [];
a.p = 42;

var b = [];
b.p = 42;


foo(a);
foo(a);


%DisableOptimizationFinalization();
%OptimizeFunctionOnNextCall(bar, "concurrent");
foo(a);
%PrepareFunctionForOptimization(bar);
%WaitForBackgroundOptimization();



a[0] = {};
foo(a);
print(bar);



%FinalizeOptimization();
print(bar);




%OptimizeFunctionOnNextCall(foo);
foo(a);
print(foo);
%PrepareFunctionForOptimization(foo);
print(bar);




foo(b);
print(foo);
print(bar);




%OptimizeFunctionOnNextCall(foo);
foo(b);
print(foo);
