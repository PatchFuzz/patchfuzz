

var log = '';

function addDebug(g, id) {
    var debuggerGlobal = newGlobal({newCompartment: true});
    debuggerGlobal.debuggee = g;
    debuggerGlobal.id = id;
    debuggerGlobal.print = function (s) { log += s; };
    debuggerGlobal.eval(
        'var dbg = new Debugger(debuggee);\n' +
        'dbg.onDebuggerStatement = function () { print(id); debugger; print(id); };\n');
    return debuggerGlobal;
}

var base = newGlobal({newCompartment: true});
var top = base;
for (var i = 0; i < 8; i++)  
    top = addDebug(top, i);
base.eval("debugger;");
assertEq(log, '0123456776543210');
