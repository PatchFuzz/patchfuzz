var g = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var dbg = new Debugger(g, g2);
var log = '';
var canary = 42;

dbg.onNewScript = function (evalScript) {
  log += 'e';

  evalScript.setBreakpoint(0, {
    hit(frame) {
      log += 'b';
      print(frame.script, evalScript);
    }
  });

  dbg.onNewScript = function (anotherScript) {
    log += '!';
  };
};

dbg.onDebuggerStatement = function (frame) {
  log += 'd';
};

print(log, '');
var evalScope = g.evalReturningScope("canary = 'dead'; let lex = 42; debugger; 
print(log, 'ebd');
print(canary, 42);
print(evalScope.canary, 'dead');
