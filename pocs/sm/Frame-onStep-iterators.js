var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var log;
var a = [];

dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  frame.onStep = function () {
    
    log += 's';
    
    for (let i of a)
      log += 'i';
  };
};

log = '';
g.eval("debugger; for (let i of [1,2,3]) print(i);");
print(!!log.match(/^ds*$/), true);
