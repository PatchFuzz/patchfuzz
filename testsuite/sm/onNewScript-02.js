

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var seen = new WeakMap();
var hits;
dbg.onNewScript = function (s) {
    assertEq(s instanceof Debugger.Script, true);
    assertEq(!seen.has(s), true);
    seen.set(s, true);
    hits++;
};

dbg.uncaughtExceptionHook = function () { hits = -999; };

function test(f) {
    hits = 0;
    f();
    assertEq(hits, 1);
}


test(function () { g.eval("function A(m, n) { return m===0?n+1:n===0?A(m-1,1):A(m-1,A(m,n-1)); }"); });


test(function () { g.eval("function g(a, b) { return b===0?a:g(b,a%b); }"); });


test(function () {
    g.eval("function e(i) { return i===0||o(i-1); }\n" +
           "function o(i) { return i!==0&&e(i-1); }\n");
});


test(function () { g.eval("function plus(x) { return function plusx(y) { return x + y; }; }"); });


test(function () { g.eval("[3].map(function (i) { return -i; });"); });


test(function () { g.eval("var obj = {get x() { return 1; }, set x(v) { print(v); }};"); });


test(function () { return g.Function("a", "b", "return b - a;"); });


test(function () { g.eval("function* sg(n) { for (var i=0;i<n;i++) yield i; }"); });


test(function () { g.eval("for (var i = 0; i < 7; i++)\n" +
                          "    obj = function () { return obj; };\n"); });


g.eval("function e(s) { eval(s); }");
test(function () { g.e("function f(x) { return -x; }"); });


g.eval("function E(s) { 'use strict'; eval(s); }");
test(function () { g.E("function g(x) { return -x; }"); });
