var f = Function("a", "b", "return a + b;");
print(f.toString(), "function anonymous(a,b\n) {\nreturn a + b;\n}");
if (Function.prototype.toSource) {
    print(f.toSource(), "(function anonymous(a,b\n) {\nreturn a + b;\n})");
}
print(decompileFunction(f), f.toString());
f = Function("a", "...rest", "return rest[42] + b;");
print(f.toString(), "function anonymous(a,...rest\n) {\nreturn rest[42] + b;\n}");
if (Function.prototype.toSource) {
    print(f.toSource(), "(function anonymous(a,...rest\n) {\nreturn rest[42] + b;\n})")
}
print(decompileFunction(f), f.toString());
f = Function("");
print(f.toString(), "function anonymous(\n) {\n\n}");
f = Function("", "(abc)");
print(f.toString(), "function anonymous(\n) {\n(abc)\n}");
