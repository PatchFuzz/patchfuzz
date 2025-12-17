var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

log = '';
g.settlePromiseNow(new g.Promise(function (){}));
print(log, '');

dbg.onPromiseSettled = function (promise) {
  log += 's';
  print(promise.seen, undefined);
  promise.seen = true;
};

log = '';
g.settlePromiseNow(new g.Promise(function (){}));
print(log, 's');

log = '';
dbg.onPromiseSettled = undefined;
g.settlePromiseNow(new g.Promise(function (){}));
print(log, '');
