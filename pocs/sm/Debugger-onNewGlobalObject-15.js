;

var dbg = new Debugger;
var log = '';
dbg.onNewGlobalObject = function (global) {
  log += 'n';
}

print(typeof newGlobal(), "object");
print(typeof newGlobal({invisibleToDebugger: false}), "object");
print(log, 'nn');

log = '';
print(typeof newGlobal({newCompartment: true, invisibleToDebugger: true}), "object");
print(log, '');

print(() => dbg.addDebuggee(newGlobal({newCompartment: true, invisibleToDebugger: true})),
                       Error);

var glob = newGlobal({newCompartment: true, invisibleToDebugger: true});
dbg.addAllGlobalsAsDebuggees();
dbg.onDebuggerStatement = function (frame) { print(true, false); };
glob.eval('debugger');
