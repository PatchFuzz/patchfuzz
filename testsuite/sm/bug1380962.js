



function test() {
eval("var f = function() { return 0; };");
assertEq(f.toSource(), "(function() {\n    [native code]\n})");
}

var g = newGlobal({ discardSource: true });
g.evaluate(test.toString() + "test()");
