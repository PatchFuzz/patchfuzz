function f1(a, b) {
    return a + b;
}
assertEq(f1.toString(), "function f1(a, b) {\n    return a + b;\n}");
if (Function.prototype.toSource) {
    assertEq(f1.toSource(), f1.toString());
}
function f2(a,  b,
            c, 
            d) {}
assertEq(f2.toString(), "function f2(a,  b,\n            c, 
function f3() { }
assertEq(f3.toString(), "function f3() { }");
