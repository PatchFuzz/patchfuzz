function f1(a, b) {
    return a + b;
}
print(f1.toString(), "function f1(a, b) {\n    return a + b;\n}");
if (Function.prototype.toSource) {
    print(f1.toSource(), f1.toString());
}
function f2(a,  b,
            c, 
            d) {}
print(f2.toString(), "function f2(a,  b,\n            c, 
function f3() { }
print(f3.toString(), "function f3() { }");
