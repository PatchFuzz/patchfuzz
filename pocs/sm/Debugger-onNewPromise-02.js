var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;

log = '';
new g.Promise(function (){});
print(log, '');

dbg.onNewPromise = function (promise) {
  log += 'n';
  print(promise.seen, undefined);
  promise.seen = true;
};

log = '';
new g.Promise(function (){});
print(log, 'n');

log = '';
dbg.onNewPromise = undefined;
new g.Promise(function (){});
print(log, '');
