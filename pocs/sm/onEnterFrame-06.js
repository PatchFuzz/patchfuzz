var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var dbg = Debugger(g1, g2);
dbg.removeDebuggee(g2); 

g1.eval("function f() { return 1; }\n");
var N = g1.N = 11;
g1.eval("function h() {\n" +
       "    for (var i = 0; i < N; i += f()) {}\n" +
       "}");
g1.h(); 

var log = '';
dbg.onEnterFrame = function (frame) { log += frame.callee.name; };
g1.h();
print(log, 'h' + Array(N + 1).join('f'));
