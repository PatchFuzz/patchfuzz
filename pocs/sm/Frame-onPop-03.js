var g = newGlobal({newCompartment: true});
g.eval("function f() { throw 'mud'; }");
g.eval("function g() { f(); }");
g.eval("function h() { g(); }");
g.eval("function i() { h(); }");

var dbg = new Debugger(g);
var log;
function makePopHandler(label) {
    return function handlePop(completion) { 
        log += label;
        print(completion.throw, "mud");
    };
}
dbg.onEnterFrame = function handleEnter(f) {
    log += "(" + f.callee.name;
    f.onPop = makePopHandler(")" + f.callee.name);  
};
dbg.onExceptionUnwind = function handleExceptionUnwind(f, x) {
    print(x, 'mud');
    log += "u" + f.callee.name;
};
log = '';
try {
    g.i();
} catch (x) {
    log += 'c';
    print(x, "mud");
}
print(log, "(i(h(g(fuf)fug)guh)hui)ic");
