var g = newGlobal({newCompartment: true});
g.eval("function f() { debugger; }");
var dbg = new Debugger(g);

var log;
dbg.onEnterFrame = function handleEnter(f) {
    log += "(";
    f.onPop = function handlePop() {
        print("handlePop was called", "handlePop should never be called");
    };
};
dbg.onDebuggerStatement = function handleDebugger(f) {
    log += "d";
    print(typeof f.onPop, "function");
    f.onPop = undefined;
};
log = '';
g.f();
print(log, "(d");
