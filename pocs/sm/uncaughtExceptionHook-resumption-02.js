var g = newGlobal({newCompartment: true});
var log;

function makeDebug(g, name) {
    var dbg = new Debugger(g);
    dbg.onDebuggerStatement = function (frame) {
        log += name;
        throw new Error(name);
    };
    dbg.uncaughtExceptionHook = function (exc) {
        print(exc.message, name);
        return name == "2" ? {return: 42} : undefined;
    };
}

var arr = [];
for (var i = 0; i < 6; i++)
    arr[i] = makeDebug(g, "" + i);

log = '';
print(g.eval("debugger;"), 42);
print(log, "012345");
