var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
g.debuggerGlobal = this;
var log;

dbg.onEnterFrame = function handleEnter(f) {
    log += '(';
    f.onPop = function handlePop(c) {
        log += ')';
        print(c.throw, "election");
    };
};
dbg.onExceptionUnwind = function handleExceptionUnwind(f, x) {
    log += 'u';
    print(x, "election");
};

log = '';
try {
    g.eval("try { throw 'election'; } finally { debuggerGlobal.log += 'f'; }");
} catch (x) {
    log += 'c';
    print(x, 'election');
}
print(log, '(ufu)c');
