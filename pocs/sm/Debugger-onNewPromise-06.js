;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onNewPromise = function (g) { log += 'n'; return undefined; };
log = '';
print(typeof new g.Promise(function (){}), "object");
print(log, 'n');

dbg.uncaughtExceptionHook = function (ex) { print(/disallowed/.test(ex), true); log += 'u'; }
dbg.onNewPromise = function (g) { log += 'n'; return { return: "snoo" }; };
log = '';
print(typeof new g.Promise(function (){}), "object");
print(log, 'nu');

dbg.onNewPromise = function (g) { log += 'n'; return { throw: "snoo" }; };
log = '';
print(typeof new g.Promise(function (){}), "object");
print(log, 'nu');

dbg.onNewPromise = function (g) { log += 'n'; return null; };
log = '';
print(typeof new g.Promise(function (){}), "object");
print(log, 'nu');

dbg.uncaughtExceptionHook = function (ex) { print(/foopy/.test(ex), true); log += 'u'; }
dbg.onNewPromise = function (g) { log += 'n'; throw "foopy"; };
log = '';
print(typeof new g.Promise(function (){}), "object");
print(log, 'nu');

