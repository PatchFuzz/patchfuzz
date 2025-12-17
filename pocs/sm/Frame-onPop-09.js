var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onExceptionUnwind = function handleUnwind(frame) {
    log += 'u';
    print(frame.type, "eval");
    frame.onPop = function handleCallPop(c) {
        log += ')';
        print(c.throw, 'up');
    };
};

log = "";
try {
    g.eval("throw 'up';");
    log += '-';
} catch (x) {
    log += 'c';
    print(x, 'up');
}
print(log, 'u)c');
