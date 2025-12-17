var locals = "";
for (var i = 0; i < 1024; i++) locals += "var v" + i + ";";
eval("function f() {" + locals + "f();}");
print("f()", RangeError);
