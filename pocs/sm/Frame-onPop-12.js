var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onDebuggerStatement = function handleDebugger(frame) {
    log += 'd';
    print(frame.type, "eval");
    frame.onPop = function firstHandlePop(c) {
        log +=')';
        print(c.return, 'on investment');
        this.onPop = function secondHandlePop(c) {
            print("secondHandlePop was called", "secondHandlePop should never be called");
        };
    };
};

log = "";
g.eval("debugger; 'on investment';");
print(log, 'd)');
