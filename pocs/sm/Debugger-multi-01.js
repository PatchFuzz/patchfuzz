var g = newGlobal({newCompartment: true});
var log;
var arr = [];

function addDebug(msg) {
    var dbg = new Debugger(g);
    dbg.onDebuggerStatement = function (stack) { log += msg; };
    arr.push(dbg);
}

addDebug('a');
addDebug('b');
addDebug('c');

log = '';
print(g.eval("debugger; 0;"), 0);
print(log, 'abc');




arr[0].onDebuggerStatement = function (stack) {
    log += 'a';
    return {return: 1};
};

log = '';
print(g.eval("debugger; 0;"), 1);
print(log, 'abc');
