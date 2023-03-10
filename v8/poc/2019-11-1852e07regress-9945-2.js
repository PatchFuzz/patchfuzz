










function mkbar() { return function(x) { x.p } }
var bar = mkbar();
function foo(x) { bar(x) }

%PrepareFunctionForOptimization(foo);
%PrepareFunctionForOptimization(bar);
%PrepareFunctionForOptimization(mkbar);


var dummy = [];
dummy.p = 0;
dummy.q = 0;

var a = [];
a.p = 42;

var b = [];
b.p = 42;


foo(a);
foo(a);


%OptimizeFunctionOnNextCall(bar);
bar(a);
print(bar);
%PrepareFunctionForOptimization(bar);




a[0] = {};
mkbar()(a);
print(bar);




print(bar);
%OptimizeFunctionOnNextCall(foo);
print(bar);
foo(a);
print(bar);
print(foo);
%PrepareFunctionForOptimization(foo);




foo(b);
print(foo);
print(bar);




%OptimizeFunctionOnNextCall(foo);
foo(b);
print(foo);
