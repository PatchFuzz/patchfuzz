var dbg = new Debugger;




function print(...expected) {
  print("print([" + expected.map((g) => g.toSource()) + "])");
  var debuggees = dbg.getDebuggees();
  print(expected.length, debuggees.length);
  for (let g of expected)
    print(debuggees.indexOf(g) != -1, true);
}

var g1 = newGlobal({newCompartment: true}); g1.toSource = function () { return "[global g1]"; };
var g2 = newGlobal({newCompartment: true}); g2.toSource = function () { return "[global g2]"; };

print();














var dg1 = dbg.addDebuggee(g1);
dg1.toSource = function() { return "[Debugger.Object for global g1]"; };
print(dg1.unwrap(), dg1);
print(dg1);



var dg2 = dbg.addDebuggee(g2);
dg2.toSource = function() { return "[Debugger.Object for global g2]"; };
print(dg2.unwrap(), dg2);
print(dg1, dg2);


var dwg1 = dg2.makeDebuggeeValue(g1);
print(dwg1.unwrap(), dg1.makeDebuggeeValue(g1));
dwg1.toSource = function() { return "[Debugger.Object for CCW of WindowProxy of g1]"; };

print(dg1, dg2);
print(dbg.removeDebuggee(g1), undefined);
print(dbg.removeDebuggee(g2), undefined);
print();






















print(dbg.hasDebuggee(g1), false);
print(dbg.hasDebuggee(dg1), false);
print(dbg.hasDebuggee(dwg1), false);

print(dbg.removeDebuggee(g1), undefined); print();
print(dbg.removeDebuggee(dg1), undefined); print();
print(dbg.removeDebuggee(dwg1), undefined); print();







function combo(addAs, designateAs, direct) {
  print("combo(" + JSON.stringify(addAs) + ", " + JSON.stringify(designateAs) + ")");
  print();
  print(dbg.addDebuggee(addAs), direct);
  print(direct);
  print(dbg.addDebuggee(designateAs), direct);
  print(direct);
  print(dbg.hasDebuggee(designateAs), true);
  print(dbg.removeDebuggee(designateAs), undefined);
  print();
}

combo(g1, g1, dg1);
combo(dg1, g1, dg1);
combo(dwg1, g1, dg1);

combo(g1, dg1, dg1);
combo(dg1, dg1, dg1);
combo(dwg1, dg1, dg1);

combo(g1, dwg1, dg1);
combo(dg1, dwg1, dg1);
combo(dwg1, dwg1, dg1);
