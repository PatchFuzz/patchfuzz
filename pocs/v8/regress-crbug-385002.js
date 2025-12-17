%ScheduleBreak(); 

function f() { f(); }
print(f, RangeError);

var locals = "";
for (var i = 0; i < 1024; i++) locals += "var v" + i + ";";
eval("function g() {" + locals + "f();}");
print("g()", RangeError);
