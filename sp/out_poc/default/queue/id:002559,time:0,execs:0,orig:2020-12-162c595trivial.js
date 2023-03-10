;
var test = "";


test = "1;";
evalWithCache(test, { printBytecode: true, printResult : true });


test = "'string';";
evalWithCache(test, { printBytecode: true, printResult : true });


test = "generation;";
evalWithCache(test, { printBytecode: true });


test = "var obj = { a: 1, b: 2 };";
evalWithCache(test, { printBytecode: true, printResult : true });


test = "var obj = { a: 1, b: 2 }; obj.a++; print(obj.a, 2);";
evalWithCache(test, { printBytecode: true, printResult : true });


test = "var obj = { a: 1, b: { c: 3, d: 4 } }; obj.b.c++; print(obj.b.c, 4);";
evalWithCache(test, { printBytecode: true, printResult : true });


test = "function f() { return 1; }; f();";
evalWithCache(test, { printBytecode: true, printResult : true });


test = "function f() { return 1; }; 1;";
evalWithCache(test, { printBytecode: true, printResult : true });


test = "function f() { return { x: 2 }; }; f();";
evalWithCache(test, { printBytecode: true });


test = "function f(a) { return a; }; f`a${4}b`;";
evalWithCache(test, { printBytecode: true, checkFrozen: true});


test = "'fooooooo'.match(/(f.+)/)[1].replace(/o/g, 'O')";
evalWithCache(test, { printBytecode: true, printResult : true });
