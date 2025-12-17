var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var log;
dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  print(frame.evalWithBindings("var i = v; 42;", { v: 'inner' }).return, 42);
};

g.i = 'outer';
log = '';
print(g.eval('debugger; i;'), 'inner');
print(log, 'd');

g.j = 'outer';
log = '';
print(g.eval('debugger; j;'), 'outer');
print(log, 'd');
