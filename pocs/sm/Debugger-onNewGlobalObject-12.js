;

var dbg1 = new Debugger;
var dbg2 = new Debugger;
var dbg3 = new Debugger;
var log;

dbg1.onNewGlobalObject = dbg2.onNewGlobalObject = dbg3.onNewGlobalObject = function () {
  log += 'n';
  throw 'party';
};

dbg1.uncaughtExceptionHook = dbg2.uncaughtExceptionHook = dbg3.uncaughtExceptionHook =
function (ex) {
  log += 'u';
  print(ex, 'party');
  return { throw: 'fit' };
};

log = '';
print(typeof newGlobal(), 'object');
print(log, 'nununu');
