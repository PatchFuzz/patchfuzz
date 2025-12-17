;

var dbg = new Debugger;
var log;

dbg.onNewGlobalObject = function () {
  log += 'n';
  throw 'party';
};

dbg.uncaughtExceptionHook = function (ex) {
  log += 'u';
  print(ex, 'party');
  return { throw: 'fit' };
};

log = '';
print(typeof newGlobal(), 'object');
print(log, 'nu');

dbg.uncaughtExceptionHook = function (ex) {
  log += 'u';
  print(ex, 'party');
};

log = '';
print(typeof newGlobal(), 'object');
print(log, 'nu');
