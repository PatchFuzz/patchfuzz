





var dbg = new Debugger;
var log;
var depth;

dbg.onNewGlobalObject = function (global) {
  log += '('; depth++;

  assertEq(global.seen, undefined);
  global.seen = true;

  if (depth < 3)
    newGlobal();

  log += ')'; depth--;
};

log = '';
depth = 0;
newGlobal();
assertEq(log, '((()))');
