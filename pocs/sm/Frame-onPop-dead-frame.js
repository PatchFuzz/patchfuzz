var g = newGlobal({newCompartment: true});
g.eval('function f() { debugger; }');

var log = '';



var dbg1 = Debugger(g);
dbg1.onDebuggerStatement = frame1 => {
  frame1.onPop = completion => {
    log += 'A';
    dbg2.removeDebuggee(g); 
    log += 'B';
  };
};

var dbg2 = Debugger(g);
dbg2.onDebuggerStatement = frame2 => {
  frame2.onPop = completion => {
    log += 'C';
  };
};

g.f();

print(log, 'AB');
