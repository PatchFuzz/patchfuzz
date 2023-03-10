































function f() { return this.foo; }

function g() { return f.apply(null, arguments); }
function h() { return f.apply(void 0, arguments); }

var foo = 42;

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();

%PrepareFunctionForOptimization(g);
for (var i = 0; i < 3; i++) print(42, g());
%OptimizeFunctionOnNextCall(g);
print(42, g());

%PrepareFunctionForOptimization(h);
for (var i = 0; i < 3; i++) print(42, h());
%OptimizeFunctionOnNextCall(h);
print(42, h());

var G1 = 21;
var G2 = 22;

function u() {
 var v = G1 + G2;
 return f.apply(v, arguments);
}

Number.prototype.foo = 42;
delete Number.prototype.foo;

%PrepareFunctionForOptimization(u);
for (var i = 0; i < 3; i++) print(void 0, u());
%OptimizeFunctionOnNextCall(u);
print(void 0, u());
