var dbg = new Debugger;


var log;
dbg.onEnterFrame = function (frame) {
  log += 'e';
  
  log += frame.environment.parent.object.label;
};

var g1 = newGlobal({newCompartment: true});
log = '';
g1.eval('Math');
print(log, '');              

var g1w = dbg.addDebuggee(g1);
print(g1w instanceof Debugger.Object, true);
g1w.label = 'g1';
log = '';
g1.eval('Math');                
print(log, 'eg1');

var g2 = newGlobal({newCompartment: true});
log = '';
g1.eval('Math');                
g2.eval('Math');                
print(log, 'eg1');

var g2w = dbg.addDebuggee(g2);
print(g2w instanceof Debugger.Object, true);
g2w.label = 'g2';
log = '';
g1.eval('Math');                
g2.eval('this');                
print(log, 'eg1eg2');

var a1 = dbg.getDebuggees();
print(a1.length, 2);

print(dbg.removeAllDebuggees(), undefined);
var a2 = dbg.getDebuggees();
print(a2.length, 0);

log = '';
g1.eval('Math');                
g2.eval('this');                
print(log, '');
