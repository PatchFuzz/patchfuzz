var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onDebuggerStatement = function handleDebugger(frame) {
    log += 'd';
    print(frame.type, "eval");
    frame.onStep = function handleStep() {
        log += 's';
        this.onStep = undefined;
        this.onPop = function handlePop() {
            log += ')';
        };
    };
};

log = "";
g.flag = false;
g.eval('debugger; flag = true');
print(log, 'ds)');
print(g.flag, true);
