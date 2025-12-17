var dbg = new Debugger;

var gw = null;
dbg.onNewGlobalObject = function (global) {
  print(arguments.length, 1);
  print(this, dbg);
  gw = global;
};
var g = newGlobal({newCompartment: true});
print(typeof gw, 'object');
print(dbg.addDebuggee(g), gw);




print(gw.unwrap(), gw);
