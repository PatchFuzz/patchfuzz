;

var dbg1 = new Debugger;
var dbg2 = new Debugger;
var dbg3 = new Debugger;
var log;
var count;

dbg1.onNewGlobalObject = dbg2.onNewGlobalObject = dbg3.onNewGlobalObject = function (global) {
  count++;
  log += count;
  if (count == 2)
    return { throw: "snoo" };
  return undefined;
};
dbg2.uncaughtExceptionHook = function (exn) {
  print(/disallowed/.test(exn), true);
  log += 'u';
};

log = '';
count = 0;
print(typeof newGlobal(), "object");
print(log, '12u3');
