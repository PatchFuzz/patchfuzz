print(Function.prototype.toString(), "function () {\n    [native code]\n}");
if (Function.prototype.toSource) {
    print(Function.prototype.toSource(), "function () {\n    [native code]\n}");
}
