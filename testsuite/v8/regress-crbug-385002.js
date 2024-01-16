





%ScheduleBreak(); 

function f() { f(); }
assertThrows(f, RangeError);

var locals = "";
for (var i = 0; i < 1024; i++) locals += "var v" + i + ";";
eval("function g() {" + locals + "f();}");
assertThrows("g()", RangeError);
