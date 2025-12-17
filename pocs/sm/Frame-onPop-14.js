var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

var count;
dbg.onDebuggerStatement = function handleDebug(frame) {
    log += 'd';
    print(frame.type, "call");
    count++;
    if (count == 10) {
        frame.onPop = function handlePop(c) {
            log += ')' + this.arguments[0];
            print(c.return, "snifter");
        };
    }
};

g.eval("function f(n) { debugger; return 'snifter'; }");
log = '';
count = 0;
g.eval("for (i = 0; i < 20; i++) f(i);");
print(count, 20);
print(log, "dddddddddd)9dddddddddd");
