;

var dbg = new Debugger;
var log;

dbg.onNewGlobalObject = function (g) { log += 'n'; return undefined; };
log = '';
print(typeof newGlobal(), "object");
print(log, 'n');

dbg.uncaughtExceptionHook = function (ex) { print(/disallowed/.test(ex), true); log += 'u'; }
dbg.onNewGlobalObject = function (g) { log += 'n'; return { return: "snoo" }; };
log = '';
print(typeof newGlobal(), "object");
print(log, 'nu');

dbg.onNewGlobalObject = function (g) { log += 'n'; return { throw: "snoo" }; };
log = '';
print(typeof newGlobal(), "object");
print(log, 'nu');

dbg.onNewGlobalObject = function (g) { log += 'n'; return null; };
log = '';
print(typeof newGlobal(), "object");
print(log, 'nu');

dbg.uncaughtExceptionHook = function (ex) { print(/foopy/.test(ex), true); log += 'u'; }
dbg.onNewGlobalObject = function (g) { log += 'n'; throw "foopy"; };
log = '';
print(typeof newGlobal(), "object");
print(log, 'nu');

