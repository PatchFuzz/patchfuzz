


load(libdir + 'asserts.js');

var dbg = new Debugger;
var log;

dbg.onNewGlobalObject = function () {
  log += 'n';
  throw 'party';
};

dbg.uncaughtExceptionHook = function (ex) {
  log += 'u';
  assertEq(ex, 'party');
  return { throw: 'fit' };
};

log = '';
assertEq(typeof newGlobal(), 'object');
assertEq(log, 'nu');

dbg.uncaughtExceptionHook = function (ex) {
  log += 'u';
  assertEq(ex, 'party');
};

log = '';
assertEq(typeof newGlobal(), 'object');
assertEq(log, 'nu');
