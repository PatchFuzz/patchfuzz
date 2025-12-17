var dbg = new Debugger;
var log = '';
dbg.onNewGlobalObject = function (global) {
  log += 'n';
  var gw = dbg.addDebuggee(global);
  gw.defineProperty('x', { value: -1 });
  
  print(gw.executeInGlobalWithBindings('Math.atan2(y,x)', { y: 0 }).return, Math.PI);
  
  print(gw.executeInGlobalWithBindings('y.toString()', { y: gw }).return, "[object global]");
};

newGlobal({newCompartment: true});

print(log, 'n');
