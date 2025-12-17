var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval('function f() { var y; debugger; }');

dbg.onExceptionUnwind = function() {
    print(0, 1);
};

dbg.onDebuggerStatement = function handleDebugger(frame) {
    frame.onPop = function(c) {
	return {throw: 555};
    }
};

try {
    g.f();
    print(0, 2);
} catch(e) {
    print(e.toString().includes("555"), true);
}
