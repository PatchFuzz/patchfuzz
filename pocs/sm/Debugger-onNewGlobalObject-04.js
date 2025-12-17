var dbg = new Debugger;
var log;

dbg.onNewGlobalObject = function (global) {
  log += 'n';
  print(global.seen, undefined);
  global.seen = true;
};

log = '';
newGlobal();
print(log, 'n');
