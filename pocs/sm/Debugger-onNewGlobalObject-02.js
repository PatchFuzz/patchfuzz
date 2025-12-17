var dbg = new Debugger;
var log;

log = '';
newGlobal();
print(log, '');

dbg.onNewGlobalObject = function (global) {
  log += 'n';
  print(global.seen, undefined);
  global.seen = true;
};

log = '';
newGlobal();
print(log, 'n');

log = '';
dbg.onNewGlobalObject = undefined;
newGlobal();
print(log, '');
