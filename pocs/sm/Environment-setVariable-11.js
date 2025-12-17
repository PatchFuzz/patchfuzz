;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var env = frame.environment.find("f");
    print(env.getVariable("f"), frame.callee);
    print(function () { env.setVariable("f", 0) }, TypeError);
    print(function () { env.setVariable("f", frame.callee) }, TypeError);
    hits++;
};
g.eval("(function f() { eval(\"\"); debugger; })();");
print(hits, 1);
