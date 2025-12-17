function test() {
eval("var f = function() { return 0; };");
print(f.toSource(), "(function() {\n    [native code]\n})");
}

var g = newGlobal({ discardSource: true });
g.evaluate(test.toString() + "test()");
