;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

dbg.onPromiseSettled = function (g) { log += 's'; return undefined; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
print(log, 's');

dbg.uncaughtExceptionHook = function (ex) { print(/disallowed/.test(ex), true); log += 'u'; }
dbg.onPromiseSettled = function (g) { log += 's'; return { return: "snoo" }; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
print(log, 'su');

dbg.onPromiseSettled = function (g) { log += 's'; return { throw: "snoo" }; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
print(log, 'su');

dbg.onPromiseSettled = function (g) { log += 's'; return null; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
print(log, 'su');

dbg.uncaughtExceptionHook = function (ex) { print(/foopy/.test(ex), true); log += 'u'; }
dbg.onPromiseSettled = function (g) { log += 's'; throw "foopy"; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
print(log, 'su');

