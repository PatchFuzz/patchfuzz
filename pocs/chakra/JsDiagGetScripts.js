var global = print("", "samethread", "dummyFileName.js");
eval('var x = "code in eval"');
eval('eval(\'var y = "Eval inside eval"\');');
var func = new Function("a", "b", "return a + b;");
var x = 1;
print("pass");
