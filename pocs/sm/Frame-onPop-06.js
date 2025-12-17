var g = newGlobal({newCompartment: true});
g.eval("function f() { debugger; }");
g.eval("function g() { f(); }");
g.eval("function h() { g(); }");
g.eval("function i() { h(); }");

var dbg = new Debugger(g);
var log;
dbg.onEnterFrame = function handleEnter(f) {
    log += "(" + f.callee.name;
    f.onPop = function handlePop(c) {
        log += ")" + f.callee.name;  
        print(dbg.getNewestFrame(), this);
    };
};
log = '';
g.i();
print(log, "(i(h(g(f)f)g)h)i");
