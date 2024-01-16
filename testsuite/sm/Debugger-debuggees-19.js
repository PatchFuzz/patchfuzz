

var dbg = new Debugger;


var log;
dbg.onEnterFrame = function (frame) {
  log += 'e';
  
  log += frame.environment.parent.object.label;
};

var g1 = newGlobal({newCompartment: true});
log = '';
g1.eval('Math');
assertEq(log, '');              

var g1w = dbg.addDebuggee(g1);
assertEq(g1w instanceof Debugger.Object, true);
g1w.label = 'g1';
log = '';
g1.eval('Math');                
assertEq(log, 'eg1');

var g2 = newGlobal({newCompartment: true});
log = '';
g1.eval('Math');                
g2.eval('Math');                
assertEq(log, 'eg1');

var g2w = dbg.addDebuggee(g2);
assertEq(g2w instanceof Debugger.Object, true);
g2w.label = 'g2';
log = '';
g1.eval('Math');                
g2.eval('this');                
assertEq(log, 'eg1eg2');

var a1 = dbg.getDebuggees();
assertEq(a1.length, 2);

assertEq(dbg.removeAllDebuggees(), undefined);
var a2 = dbg.getDebuggees();
assertEq(a2.length, 0);

log = '';
g1.eval('Math');                
g2.eval('this');                
assertEq(log, '');
