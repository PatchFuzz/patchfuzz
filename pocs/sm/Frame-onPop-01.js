var g = newGlobal({newCompartment: true});
g.eval("function f() { debugger; }");
g.eval("function g() { f(); }");
g.eval("function h() { g(); }");
g.eval("function i() { h(); }");

var dbg = new Debugger(g);
var log;
function logger(frame, mark) { 
    return function (completion) {
        print(this, frame);
        print('return' in completion, true);
        log += mark;
    };
}
dbg.onEnterFrame = function handleEnter(f) {
    log += "(" + f.callee.name;
    
    
    
    f.onPop = logger(f, f.callee.name + ")");  
};
dbg.onDebuggerStatement = function handleDebugger(f) {
    log += 'd';
};
log = '';
g.i();
print(log, "(i(h(g(fdf)g)h)i)");
