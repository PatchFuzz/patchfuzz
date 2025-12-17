var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
g.eval("function h() { debugger; }");
var arr;
dbg.onDebuggerStatement = function (hframe) {
    var e = hframe.older.environment;
    print(arr.indexOf(e), -1);
    arr.push(e);
};

function test(code, expectedHits) {
    arr = [];
    g.eval(code);
    print(arr.length, expectedHits);
}


test("(function () { var f = function (a) { h(); return a; }; f(1); f(2); })();", 2);


test("(function f(n) { h(); return n < 2 ? 1 : n * f(n - 1); })(3);", 3);


test("(function () { for (var i = 0; i < 3; i++) { let j = i * 4; h(); }})();", 3);


test("(function () { 'use strict'; for (var i = 0; i < 3; i++) eval('h();'); })();", 3);
