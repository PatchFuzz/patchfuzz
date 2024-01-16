load(libdir + 'bytecode-cache.js');
var test = "";


test = "1;";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "'string';";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "generation;";
evalWithCache(test, { assertEqBytecode: true });


test = "var obj = { a: 1, b: 2 };";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "var obj = { a: 1, b: 2 }; obj.a++; assertEq(obj.a, 2);";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "var obj = { a: 1, b: { c: 3, d: 4 } }; obj.b.c++; assertEq(obj.b.c, 4);";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "function f() { return 1; }; f();";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "function f() { return 1; }; 1;";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });


test = "function f() { return { x: 2 }; }; f();";
evalWithCache(test, { assertEqBytecode: true });


test = "function f(a) { return a; }; f`a${4}b`;";
evalWithCache(test, { assertEqBytecode: true, checkFrozen: true});


test = "'fooooooo'.match(/(f.+)/)[1].replace(/o/g, 'O')";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });
