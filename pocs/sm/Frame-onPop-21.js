var g = newGlobal({newCompartment: true});
g.eval('function f(a,b) { var x = "entablature", y; debugger; return x+y+a+b; }');

var dbg = new Debugger(g);
var log;

dbg.onDebuggerStatement = function handleDebugger(frame) {
    log += 'd';
    frame.onPop = handlePop;
};

function handlePop(c) {
    log += ')';

    
    print(this.eval('a').return, 'frieze');
    print(this.eval('b = "architrave"').return, 'architrave');
    print(this.eval('arguments[1]').return, 'architrave');
    print(this.eval('b').return, 'architrave');

    
    print(this.eval('x').return, 'entablature');
    print(this.eval('y = "cornice"').return, 'cornice');
    print(this.eval('y').return, 'cornice');
}

log = '';
g.eval('f("frieze", "stylobate")');
print(log, 'd)');
