var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

g.eval('function f(n) { if (n > 0) f(n-1); else debugger; }');

dbg.onEnterFrame = function handleEnter(frame) {
    log += '(';
    frame.onPop = function handlePop(c) {
        log += ')';
        print(typeof c == "object" && 'return' in c, true);
    };
};

log = '';
g.f(10);
print(log, "((((((((((()))))))))))");
