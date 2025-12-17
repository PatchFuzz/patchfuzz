;

var dbg = new Debugger;

function check(bad) {
  print("check(" + JSON.stringify(bad) + ")");
  print(function () { dbg.addDebuggee(bad); }, TypeError);
  print(dbg.getDebuggees().length, 0);
  print(function () { dbg.hasDebuggee(bad); }, TypeError);
  print(function () { dbg.removeDebuggee(bad); }, TypeError);
}

var g = newGlobal({newCompartment: true});
check(g.Object());
check(g.Object);
check(g.Function(""));



var g2 = newGlobal({newCompartment: true});
var dbg2 = new Debugger;
var d2g2 = dbg2.addDebuggee(g2);
check(d2g2);
